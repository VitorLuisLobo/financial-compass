

## Hero: Foto "Recortada" Sobreposta (Sem Enquadramento)

### Problema Atual
A foto está dentro de um container com `rounded-3xl`, borda, sombra e overflow hidden — criando um "cartão" visível ao redor da imagem. No mobile isso fica ainda mais evidente.

### Proposta
Remover todo o enquadramento (rounded corners, border, shadow, overflow hidden) e tratar a foto como um **elemento flutuante/sobreposto** — como se fosse um PNG recortado sobre o fundo do hero.

**Técnica:**
- Remover o `div` wrapper com `rounded-3xl` e `hero-image-glow`
- Aplicar um **gradiente fade na parte inferior** da própria imagem usando um pseudo-elemento, fazendo a pessoa "emergir" do fundo suavemente
- Sem bordas, sem cantos arredondados, sem box-shadow no container
- A imagem fica com `object-cover` e o fade inferior dissolve para o background, criando o efeito de recorte flutuante
- Os blobs decorativos permanecem atrás para dar profundidade

**Resultado visual:** A pessoa aparece "saindo" do fundo da página, sem nenhuma moldura visível — estilo editorial/premium.

### Layout Mobile
```text
┌──────────────────┐
│    (blobs atrás) │
│                  │
│     PESSOA       │
│    (sem moldura) │
│   ▓▓fade▓▓▓▓▓▓  │
│                  │
│   Badge          │
│   Headline       │
└──────────────────┘
```

### Mudanças

**`src/pages/Index.tsx`** (hero, linhas 37-53):
- Remover o wrapper `rounded-3xl hero-image-glow overflow-hidden`
- Imagem direta com fade inferior via `absolute` gradient overlay (mais forte, `from-background`)
- Manter blobs decorativos
- Sem bordas visíveis

**`src/index.css`**: Pode remover `.hero-image-glow` se não for usada em outro lugar.

