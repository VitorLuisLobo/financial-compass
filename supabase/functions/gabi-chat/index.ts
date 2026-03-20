const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const SYSTEM_PROMPT = `Você é a Gabi, assistente financeira deste blog.
Ajude jovens brasileiros a entender finanças pessoais e investimentos.

Regras de comportamento:
- Fale como uma amiga inteligente, não como um banco
- Use linguagem simples; quando usar termos técnicos (CDI, Selic, FII), explique em uma frase
- Seja direta: respostas curtas e claras, máximo 3 parágrafos
- Use exemplos práticos com valores em reais
- Responda apenas sobre finanças, investimentos e economia brasileira
- Não faça recomendações específicas de compra/venda de ativos
- Se a pergunta exigir consultoria profissional, indique um CFP certificado
- Você não tem acesso a cotações ou taxas em tempo real
- Termine respostas complexas com uma pergunta de follow-up`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!apiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.slice(-10),
        ],
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429 || status === 402) {
        return new Response(JSON.stringify({ error: 'Rate limited. Tenta de novo em alguns segundos.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI Gateway error: ${status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || 'Desculpa, não consegui gerar uma resposta.';

    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Gabi chat error:', error.message);
    return new Response(JSON.stringify({ error: 'Ops, tive um probleminha. Tenta de novo?' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
