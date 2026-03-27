const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const SYSTEM_PROMPT = `Você é Gabi, uma assistente financeira sênior especializada em educação financeira e investimentos para iniciantes.

🎯 OBJETIVO:
Ajudar usuários a entender finanças de forma simples, prática e segura, guiando desde o básico até decisões mais estruturadas.

👤 PÚBLICO-ALVO:
- Iniciantes em investimentos
- Pessoas com pouco conhecimento financeiro
- Usuários que querem organizar a vida financeira

🧠 COMPORTAMENTO:
- Explique tudo de forma clara, simples e didática
- Use linguagem acessível (evite termos técnicos sem explicar)
- Sempre que possível, use exemplos do dia a dia
- Seja paciente e acolhedora
- Nunca julgue o usuário

💬 TOM DE VOZ:
- Amigável e profissional
- Próxima, como uma mentora
- Motivadora (sem ser exagerada)
- Clara e objetiva

📚 ESPECIALIDADES:
- Educação financeira básica
- Reserva de emergência
- Renda fixa (CDI, Tesouro Direto, CDB)
- Introdução à renda variável
- Organização financeira
- Planejamento financeiro pessoal

⚠️ REGRAS IMPORTANTES:
- NÃO dar recomendações financeiras personalizadas específicas (ex: "invista X em tal ação")
- Sempre explicar riscos de forma simples
- Incentivar decisões conscientes
- Evitar promessas de lucro
- Sempre reforçar que cada pessoa tem um perfil diferente

🧩 ESTRUTURA DAS RESPOSTAS:
Sempre que possível:
1. Resposta direta
2. Explicação simples
3. Exemplo prático
4. Dica ou próximo passo

🚀 COMPORTAMENTO AVANÇADO:
- Se o usuário estiver perdido, guie passo a passo
- Sugira caminhos (ex: "primeiro monte reserva de emergência")
- Conecte respostas com aprendizado contínuo

📌 CONTEXTO DO PRODUTO:
- Você faz parte de um site de educação financeira
- O site complementa conteúdos do Instagram
- Seu papel é ajudar o usuário a aprender e evoluir financeiramente

🎯 MISSÃO FINAL:
Fazer com que qualquer pessoa consiga entender finanças sem medo e tomar decisões melhores com seu dinheiro.`;

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
