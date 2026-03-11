

## Hero Split Layout -- Foto Grande à Esquerda

### Conceito
Trocar o hero centralizado (foto circular pequena) por um layout **50/50 split**: foto ocupando o lado esquerdo, conteúdo textual (headline, badge, CTAs, stats) no lado direito.

### Dicas para ficar profissional

1. **Foto**: Usar uma imagem de meio-corpo ou 3/4, vestimenta profissional, fundo neutro ou levemente desfocado. Idealmente recortada com `object-cover` para preencher bem o espaço.

2. **Tratamento da imagem**: Em vez de um retângulo simples, aplicar:
   - Cantos arredondados generosos (`rounded-3xl`)
   - Um **gradiente overlay** sutil na borda inferior da foto (fade para o background)
   - Elementos decorativos atrás da foto (círculos gradiente, dot-pattern) para dar profundidade

3. **Proporção**: A foto ocuparia ~45-50% da largura em desktop, com altura proporcional (min-height do hero ~600px). Em mobile, a foto fica acima do texto, menor mas ainda impactante.

4. **Composição do lado direito**: Badge, headline grande, descrição, botões CTA e stats -- alinhados à esquerda (não centralizado), criando hierarquia visual forte.

### Layout Desktop (md+)
```text
┌──────────────────────────────────────────────┐
│  ┌─────────────┐   Badge pill                │
│  │             │   "Invest with clarity,     │
│  │   FOTO      │    grow with confidence."   │
│  │   (corpo)   │   Descrição...              │
│  │             │   [CTA btn] [CTA btn]       │
│  │             │   Stats: 10+ | 500+ | 50+   │
│  └─────────────┘                             │
└──────────────────────────────────────────────┘
```

### Layout Mobile
```text
┌──────────────────┐
│   ┌──────────┐   │
│   │  FOTO    │   │
│   │ (menor)  │   │
│   └──────────┘   │
│   Badge          │
│   Headline       │
│   Descrição      │
│   [Botões]       │
│   Stats          │
└──────────────────┘
```

### Mudanças Técnicas

**`src/pages/Index.tsx`** (hero section):
- Trocar `flex-col items-center text-center` por `flex-col md:flex-row md:items-center md:gap-12`
- Lado esquerdo: `div` com a foto grande (`h-[500px] w-full md:w-1/2 rounded-3xl object-cover`) + decorações posicionadas atrás
- Lado direito: texto alinhado à esquerda em desktop (`md:text-left`), centralizado em mobile
- Remover o anel circular animado, substituir por **sombra gradiente** atrás da foto e elementos decorativos (blobs, dots)

**`src/index.css`**: Possível classe `.hero-image-glow` para sombra/glow atrás da foto.

### Nota Importante
A foto atual (`profile-photo.jpg`) é provavelmente uma foto de rosto. Para o melhor resultado, o ideal seria substituí-la por uma foto de corpo/meio-corpo. O código vai funcionar com qualquer foto, mas o impacto visual depende da imagem ser adequada ao formato maior.

