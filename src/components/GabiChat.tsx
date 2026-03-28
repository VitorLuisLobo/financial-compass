import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, RotateCcw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  error?: boolean;
}

const WELCOME_MESSAGE = `Oi! Eu sou a Gabi, sua mentora financeira aqui no site. 👋

Estou aqui pra te ajudar a entender finanças sem complicação — do básico ao mais avançado, no seu ritmo. Pode perguntar qualquer coisa, não existe pergunta boba! 😊

Como posso te ajudar hoje?`;

const QUICK_PILLS = [
  'Como começar a investir?',
  'O que é CDI?',
  'Vale a pena o Tesouro Direto?',
  'Como montar reserva de emergência?',
];

const SESSION_KEY = 'gabi-chat-history';

function loadHistory(): Message[] {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveHistory(messages: Message[]) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages.slice(-10)));
  } catch {}
}

export default function GabiChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(() => loadHistory());
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showWelcome = messages.length === 0;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    saveHistory(messages);
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const { data, error } = await supabase.functions.invoke('gabi-chat', {
        body: {
          messages: newMessages.filter(m => !m.error).map(({ role, content }) => ({ role, content })),
        },
      });

      if (error) throw error;

      const assistantMsg: Message = {
        role: 'assistant',
        content: data.content || data.error || 'Sem resposta.',
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Ops, tive um probleminha. Tenta de novo?', error: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const retryLast = () => {
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      // Remove last error message
      setMessages(prev => prev.filter((_, i) => i !== prev.length - 1));
      sendMessage(lastUserMsg.content);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 100) + 'px';
    }
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-none md:rounded-2xl" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#1C1917' }}>
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(142,71%,45%)] text-sm font-bold text-white">
          G
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#1C1917] bg-[hsl(142,71%,45%)]" style={{ animation: 'pulse 2s infinite' }} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Gabi</p>
          <p className="text-xs text-white/50">Assistente financeira</p>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4" style={{ background: '#F7F4EE' }}>
        {showWelcome && (
          <div className="mb-4">
            <div
              className="mb-3 max-w-[85%] whitespace-pre-line px-3.5 py-2.5 text-[13px] leading-relaxed text-[#1C1917]"
              style={{
                background: '#fff',
                border: '0.5px solid #EDEAE2',
                borderRadius: '12px 12px 12px 0',
              }}
            >
              {WELCOME_MESSAGE}
            </div>
            <div className="flex flex-wrap gap-2">
              {QUICK_PILLS.map(pill => (
                <button
                  key={pill}
                  onClick={() => sendMessage(pill)}
                  className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors active:scale-[0.97]"
                  style={{
                    background: '#fff',
                    border: '0.5px solid #EDEAE2',
                    color: '#1C1917',
                  }}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                msg.role === 'user' ? 'text-white' : 'text-[#1C1917]'
              }`}
              style={
                msg.role === 'user'
                  ? { background: '#16A34A', borderRadius: '12px 12px 0 12px' }
                  : { background: '#fff', border: '0.5px solid #EDEAE2', borderRadius: '12px 12px 12px 0' }
              }
            >
              {msg.content}
              {msg.error && (
                <button
                  onClick={retryLast}
                  className="mt-2 flex items-center gap-1 text-xs font-medium text-[#16A34A] transition-colors hover:underline"
                >
                  <RotateCcw className="h-3 w-3" /> Tentar novamente
                </button>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="mb-3 flex justify-start">
            <div
              className="flex gap-1 px-4 py-3"
              style={{ background: '#fff', border: '0.5px solid #EDEAE2', borderRadius: '12px 12px 12px 0' }}
            >
              {[0, 1, 2].map(j => (
                <span
                  key={j}
                  className="inline-block h-2 w-2 rounded-full bg-[#1C1917]/30"
                  style={{
                    animation: 'dotBounce 1.2s ease-in-out infinite',
                    animationDelay: `${j * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-end gap-2 border-t px-3 py-2.5" style={{ borderColor: '#EDEAE2', background: '#F7F4EE' }}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={e => { setInput(e.target.value); handleTextareaInput(); }}
          onKeyDown={handleKeyDown}
          placeholder="Pergunte sobre finanças..."
          disabled={isLoading}
          rows={1}
          className="flex-1 resize-none bg-transparent text-[13px] text-[#1C1917] placeholder-[#1C1917]/40 outline-none disabled:opacity-50"
          style={{ maxHeight: 100 }}
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || isLoading}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white transition-all hover:bg-[#16A34A]/90 disabled:opacity-40 active:scale-95"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>

      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
