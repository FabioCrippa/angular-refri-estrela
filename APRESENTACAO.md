# 🌟 Landing Page - Refrigerante Estrela

Landing page profissional desenvolvida para apresentação ao Refrigerante Estrela, demonstrando uma solução completa de presença digital.

## 🎯 Objetivo

Esta landing page foi criada como **demo** para mostrar à empresa o potencial de ter uma presença digital profissional, aumentando visibilidade, alcance de mercado e vendas.

## ✨ Características

### 📱 Seções Implementadas

1. **Hero Section**
   - Título impactante e chamativo
   - CTA direto para WhatsApp
   - Animações suaves de entrada
   - Design gradient moderno

2. **Sobre o Produto**
   - História e valores da marca
   - Destaque para qualidade e tradição
   - Cards com diferenciais

3. **Catálogo de Produtos**
   - Visualização dos 3 tamanhos (2L, 600ml, 350ml)
   - Lista de sabores (Guaraná, Cola, Laranja, Limão)
   - Cards interativos com hover effects

4. **Onde Comprar**
   - Mapa de pontos de venda
   - Integração com Google Maps
   - CTA para distribuidores

5. **Depoimentos**
   - Prova social com avaliações de clientes
   - Sistema de estrelas
   - Cards responsivos

6. **Formulário de Contato**
   - Validação completa de campos
   - Múltiplos tipos de solicitação
   - Feedback visual ao usuário
   - Animações de sucesso

7. **Rodapé Completo**
   - Informações de contato
   - Links para redes sociais
   - Mapa do site
   - Botão voltar ao topo

### 🎨 Design & UX

- ✅ **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Animações suaves** - Transições e efeitos profissionais
- ✅ **Cores modernas** - Gradientes purple/blue com destaques em vermelho
- ✅ **Tipografia clara** - Hierarquia visual bem definida
- ✅ **CTAs estratégicos** - Botões de ação em locais-chave
- ✅ **WhatsApp integrado** - Facilita contato imediato

### 🚀 Tecnologias

- **Angular 21** - Framework moderno e performático
- **TypeScript** - Type-safety e código organizado
- **SCSS** - Estilização avançada e modular
- **Standalone Components** - Arquitetura moderna
- **Reactive Forms** - Validação robusta de formulários

## 📦 Como Executar

### Pré-requisitos
- Node.js 20+ instalado
- npm 10+ instalado

### Instalação e Execução

```bash
# 1. Instalar dependências (se necessário)
npm install

# 2. Iniciar servidor de desenvolvimento
npm start

# 3. Abrir no navegador
# http://localhost:4200
```

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Os arquivos estarão em: dist/angular-refri-estrela
```

## 🎯 Personalizações Necessárias

Antes de apresentar à empresa, personalize:

### 1. Número de WhatsApp
Atualize nos arquivos:
- `src/app/components/hero/hero.component.ts` (linha 11)
- `src/app/components/locations/locations.component.ts` (linha 23)

```typescript
whatsappNumber = '5514999999999'; // Substituir pelo número real
```

### 2. Imagens Reais
Substitua os SVG placeholders por fotos reais:
- Produtos (garrafas e latas)
- Logo da empresa
- Fotos de pontos de venda

### 3. Informações de Contato
Atualizar em `src/app/components/footer/footer.component.html`:
- Endereço da empresa
- Telefone
- E-mail
- Links de redes sociais

### 4. Pontos de Venda
Edite `src/app/components/locations/locations.component.ts`:
```typescript
locations: Location[] = [
  { id: 1, name: 'Nome Real', address: 'Endereço Real', type: 'supermarket' }
  // Adicionar locais reais
];
```

### 5. Depoimentos
Adicione depoimentos reais em `src/app/components/testimonials/testimonials.component.ts`

## 🌐 Deploy e Hospedagem

### Opções Recomendadas (GRATUITAS):

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Conecte o repositório GitHub
   - Build automático

3. **GitHub Pages**
   ```bash
   ng build --base-href=/angular-refri-estrela/
   npx angular-cli-ghpages --dir=dist/angular-refri-estrela/browser
   ```

## 📊 Melhorias Futuras (Próximas Versões)

- [ ] Galeria de fotos dos produtos
- [ ] Blog com notícias e receitas
- [ ] E-commerce completo
- [ ] Área de distribuidores
- [ ] Sistema de rastreamento de pedidos
- [ ] Integração com redes sociais (feed)
- [ ] Chatbot para atendimento
- [ ] Programa de fidelidade

## 💼 Estratégia de Apresentação

### Como Apresentar à Empresa:

1. **Demonstração ao Vivo**
   - Mostre a landing page funcionando
   - Destaque responsividade (teste no celular)
   - Clique nos CTAs para mostrar integração WhatsApp

2. **Benefícios a Destacar:**
   - ✅ Presença digital profissional 24/7
   - ✅ Alcance de novos clientes
   - ✅ Facilita contato e vendas
   - ✅ Competitividade com grandes marcas
   - ✅ Baixo custo de manutenção
   - ✅ Métricas e análises de visitantes

3. **Proposta de Valor:**
   ```
   "Com essa landing page, o Refrigerante Estrela terá:
   - Vitrine digital dos produtos
   - Canal direto com clientes
   - Captação de novos distribuidores
   - Fortalecimento da marca regional
   - Diferencial competitivo"
   ```

4. **Próximos Passos:**
   - Personalização com conteúdo real
   - Registro de domínio (www.refrigeranteestrela.com.br)
   - Hospedagem profissional
   - Configuração de e-mail corporativo
   - Google Analytics para métricas
   - SEO para aparecer no Google

## 📈 ROI Esperado

- **Aumento de visibilidade** - Aparecer nas buscas do Google
- **Redução de custos** - Marketing digital vs tradicional
- **Novos canais de venda** - Captação de distribuidores online
- **Credibilidade** - Presença digital profissional

## 📞 Suporte

Desenvolvido por: [Seu Nome]
Contato: [Seu E-mail/WhatsApp]

---

**Nota**: Esta é uma versão demo. Todas as informações de contato, produtos e depoimentos são ilustrativos e devem ser substituídos pelos dados reais da empresa.
