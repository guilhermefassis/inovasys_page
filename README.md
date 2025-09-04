
# 📚 Documentação Técnica - Site TechFlow Consultoria

## 🗂️ Estrutura do Projeto

```
techflow_consultoria/
├── app/
│   ├── app/
│   │   ├── globals.css           # Estilos globais
│   │   ├── layout.tsx            # Layout principal (SEO, meta tags)
│   │   ├── page.tsx              # Página principal (estrutura das seções)
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts      # API para processar formulário de contato
│   ├── components/               # Componentes da página
│   │   ├── header.tsx           # Cabeçalho com logo e menu
│   │   ├── hero-section.tsx     # Seção principal (banner)
│   │   ├── services-section.tsx # Seção de serviços
│   │   ├── results-section.tsx  # Seção de resultados
│   │   ├── testimonials-section.tsx # Depoimentos
│   │   ├── why-choose-section.tsx   # Por que escolher
│   │   ├── contact-section.tsx  # Formulário de contato
│   │   └── footer.tsx           # Rodapé
│   └── public/                  # Arquivos públicos (imagens, favicon, etc.)
```

---

## 🎨 Como Alterar a Logo Principal

### Localização da Logo
A logo está configurada no arquivo: `app/components/header.tsx`

**Linha atual (aproximadamente linha 20-30):**
```jsx
<Image
  src="https://cdn.abacus.ai/images/f173bfe6-e645-4fe0-89a1-77e6b13de067.png"
  alt="TechFlow Consultoria"
  fill
  className="object-contain"
  priority
/>
```

### Para Alterar a Logo:

**Opção 1: Usar URL Externa (mais fácil)**
1. Faça upload da sua logo em algum serviço (Google Drive, Dropbox, etc.)
2. Obtenha o link público da imagem
3. Substitua a URL na linha `src=`

**Opção 2: Usar Arquivo Local**
1. Coloque sua logo na pasta `app/public/images/`
2. Nomeie como `logo-techflow.png` (ou outro nome)
3. Altere o código para:
```jsx
<Image
  src="/images/logo-techflow.png"
  alt="TechFlow Consultoria"
  fill
  className="object-contain"
  priority
/>
```

### Ajustar Tamanho da Logo
Se precisar ajustar o container da logo, altere a classe `w-48 h-8`:
```jsx
<div className="relative w-60 h-10 bg-muted rounded"> // Aumenta o tamanho
```

---

## ✏️ Onde Editar os Conteúdos do Site

### 1. **Seção Hero (Banner Principal)**
**Arquivo**: `app/components/hero-section.tsx`

**Editáveis:**
- **Título principal**: Linha ~25-30
- **Subtítulo**: Linha ~35-40
- **Botão de ação**: Linha ~45-50
- **Estatísticas**: Linhas ~60-80

**Exemplo de alteração:**
```jsx
// ANTES
<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
  Transforme seu <span className="text-blue-600">Negócio</span> com Tecnologia
</h1>

// DEPOIS
<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
  Seu <span className="text-blue-600">Sucesso Digital</span> Começa Aqui
</h1>
```

### 2. **Seção de Serviços**
**Arquivo**: `app/components/services-section.tsx`

**Editáveis:**
- **Título da seção**: Linha ~15-20
- **Descrição**: Linha ~25-30
- **Cards de serviços**: Cada serviço tem título, descrição e ícone (linhas ~40-150)

### 3. **Seção de Resultados/Cases**
**Arquivo**: `app/components/results-section.tsx`

**Editáveis:**
- **Título**: "Resultados que Comprovam Nossa Excelência"
- **Cases de sucesso**: Cada case tem nome da empresa, economia, produtividade
- **Métricas**: Números de destaque

### 4. **Depoimentos**
**Arquivo**: `app/components/testimonials-section.tsx`

**Editáveis:**
- **Cada depoimento**: Nome, cargo, empresa, foto, texto do depoimento
- **Adicionar/remover depoimentos**: Duplicar ou remover blocos de código

### 5. **Informações da Empresa (SEO)**
**Arquivo**: `app/app/layout.tsx`

**Editáveis:**
- **Título da página**: Linha ~8
- **Descrição**: Linha ~9  
- **Palavras-chave**: Linha ~10
- **URL do site**: Linha ~14

### 6. **Rodapé**
**Arquivo**: `app/components/footer.tsx`

**Editáveis:**
- **Informações de contato**: Email, telefone, endereço
- **Links de redes sociais**
- **Texto de direitos autorais**

---

## 📧 Como Funciona o Formulário de Contato

### Fluxo Completo:

1. **Cliente preenche formulário** (`contact-section.tsx`)
2. **Dados são enviados** via POST para `/api/contact`
3. **API processa** os dados (`app/api/contact/route.ts`)
4. **Sistema registra** a solicitação no console
5. **Gmail abre automaticamente** para você responder

### Arquivo da API: `app/api/contact/route.ts`

**O que acontece quando cliente submete:**

```typescript
// 1. Validação dos dados
if (!name || !email || !service) {
  return NextResponse.json(
    { error: 'Nome, email e serviço são obrigatórios' },
    { status: 400 }
  );
}

// 2. Gera ID único para o contato
const contactId = `TF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// 3. Registra no console (aparece no terminal)
console.log('Nova solicitação de contato:', {
  id: contactId,
  name: name.trim(),
  email: email.trim().toLowerCase(),
  company: company?.trim() || 'Não informado',
  phone: phone?.trim() || 'Não informado',
  service: service.trim(),
  message: message?.trim() || 'Nenhuma mensagem adicional',
  timestamp: new Date().toISOString(),
});

// 4. Retorna sucesso para o cliente
return NextResponse.json({
  success: true,
  message: 'Solicitação enviada com sucesso!',
  contactId: contactId,
});
```

### Como Você Recebe as Solicitações:

**Atualmente:** Os dados aparecem no console do terminal onde o site está rodando.

**Para melhorar:** Você pode:
1. **Integrar com email**: Enviar os dados por email automaticamente
2. **Salvar no banco**: Criar um banco de dados para armazenar leads
3. **Integrar CRM**: Conectar direto com HubSpot, RD Station, etc.

### Personalizar Email de Contato:

No arquivo `contact-section.tsx`, linha ~120, altere:
```typescript
// Altere este email para o seu
window.open(`https://mail.google.com/mail/u/0/?view=cm&to=SEU-EMAIL@techflowconsultoria.com.br&su=${subject}&body=${body}`, '_blank');
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos:
- Node.js instalado (versão 16+)
- Yarn instalado

### Passos:

1. **Abrir terminal** e navegar para a pasta:
```bash
cd /home/ubuntu/techflow_consultoria/app
```

2. **Instalar dependências** (primeira vez):
```bash
yarn install
```

3. **Rodar em modo desenvolvimento**:
```bash
yarn dev
```

4. **Acessar no navegador**:
```
http://localhost:3000
```

### Comandos Úteis:

```bash
# Rodar em desenvolvimento (com hot reload)
yarn dev

# Fazer build para produção
yarn build

# Rodar versão de produção
yarn start

# Verificar erros de TypeScript
yarn tsc --noEmit

# Parar o servidor
Ctrl + C (no terminal)
```

### Ver Logs de Contato:

Quando rodar com `yarn dev`, todas as submissões do formulário aparecerão no terminal:

```
Nova solicitação de contato: {
  id: 'TF-1234567890-abc123',
  name: 'João Silva',
  email: 'joao@empresa.com',
  company: 'Empresa XYZ',
  phone: '(98) 99999-9999',
  service: 'Automação de Processos',
  message: 'Preciso automatizar meu CRM',
  timestamp: '2024-01-15T14:30:00.000Z'
}
```

---

## 🛠️ Alterações Mais Comuns

### 1. **Mudar Cores do Site**
**Arquivo**: `app/app/globals.css` (linhas 1-20)

Principais cores usadas:
- `blue-600`: Azul principal
- `gray-900`: Texto escuro
- `gray-100`: Backgrounds claros

### 2. **Adicionar Nova Seção**
1. Criar novo arquivo em `app/components/nova-secao.tsx`
2. Adicionar no `app/app/page.tsx`:
```jsx
import { NovaSecao } from '@/components/nova-secao';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NovaSecao />  {/* Nova seção aqui */}
      <ServicesSection />
      // ... resto das seções
    </main>
  );
}
```

### 3. **Alterar Imagens**
- **Hero**: `hero-section.tsx` - alterar URLs das imagens
- **Cases**: `results-section.tsx` - alterar fotos dos cases
- **Depoimentos**: `testimonials-section.tsx` - fotos dos clientes

### 4. **Adicionar Google Analytics**
**Arquivo**: `app/app/layout.tsx`

Adicionar antes do `</head>`:
```jsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

---

## 🚨 Dicas Importantes

### ❌ O Que NÃO Fazer:
- Não alterar arquivos em `app/.next/` (são gerados automaticamente)
- Não modificar `package.json` sem necessidade
- Não deletar arquivos em `app/components/ui/` (componentes do sistema)

### ✅ Boas Práticas:
- **Sempre fazer backup** antes de grandes alterações
- **Testar localmente** antes de fazer deploy
- **Usar git** para controle de versão
- **Manter consistência** nas cores e tipografia

### 🔧 Solução de Problemas Comuns:

**Erro de compilação:**
```bash
yarn tsc --noEmit  # Verifica erros de TypeScript
```

**Erro de dependências:**
```bash
rm -rf node_modules
yarn install
```

**Site não carrega:**
- Verificar se porta 3000 está livre
- Verificar se todas as dependências foram instaladas
- Olhar erros no terminal

---

## 📞 Suporte

Se tiver dúvidas específicas sobre alguma alteração, **sempre teste localmente primeiro** com `yarn dev` antes de fazer deploy.

**Arquivos mais importantes para suas alterações:**
1. `header.tsx` - Logo e menu
2. `hero-section.tsx` - Banner principal  
3. `contact-section.tsx` - Formulário
4. `layout.tsx` - SEO e meta tags
5. `route.ts` - Processamento de contatos

**Boa sorte com as customizações!** 🚀
