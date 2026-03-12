

## Foto Recortada (PNG sem fundo) no Hero

### Problema
A foto atual (`profile-photo.jpg`) é um JPG com fundo próprio, criando um retângulo visível branco/claro no lado esquerdo do hero. Mesmo sem bordas ou rounded corners, o fundo da imagem contrasta com o fundo do site.

### Solução

**1. Gerar uma nova imagem PNG com fundo transparente** usando a API de edição de imagem (Nano banana):
- Enviar a foto atual com instrução para remover o fundo e gerar uma pessoa de meio-corpo, em pé, sorrindo, mostrando braços
- Salvar o resultado como PNG transparente em `src/assets/profile-photo.png`

**2. Atualizar `src/pages/Index.tsx`**:
- Trocar o import para o novo `.png`
- Remover o `object-cover` com altura fixa — usar a imagem em tamanho natural com `object-contain`
- Garantir que os blobs decorativos fiquem atrás mas o fundo do site passe através da transparência da imagem
- Ajustar o fade inferior para ser mais sutil (a imagem já não terá fundo sólido)

### Resultado
A pessoa aparece "flutuando" sobre o fundo do site com os blobs decorativos atrás, sem nenhum retângulo visível — estilo PNG recortado editorial.

