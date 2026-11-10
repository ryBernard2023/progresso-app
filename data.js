const CAT={q:'Quero aprender',a:'Aprofundar',v:'Vagas'};
// m: c = curso por unidades (aulas, módulos), d = checklist de tópicos (guia: documentação oficial), p = projeto. e = essencial antes da busca por vagas. req = pré-requisitos. A ordem do array é a fila linear.
const I=(id,nome,m,h,n,u,e,cat,req,l,t)=>({id,nome,m,h,n,u,e,cat,req,l,t});
const FC=s=>['freeCodeCamp','https://www.freecodecamp.org/learn/'+s+'-v9/'],ES=s=>['Estudonauta','https://www.estudonauta.com/curso/'+s+'/'],B7=['B7Web','https://b7web.com.br'],RK=['Rocketseat','https://app.rocketseat.com.br/jornada/seguranca-para-devs/visao-geral'];
const ITEMS=[
I('adonis','AdonisJS (B7Web)','c',20,10,'módulo',1,'a',[],[B7,['Docs','https://docs.adonisjs.com']],'Lucid, validators, middleware, autenticação, testes com Japa'),
I('sql','Relational Databases (freeCodeCamp)','c',60,20,'etapa',1,'a',[],[FC('relational-databases')],'SQL, PostgreSQL, Bash e Git; projetos World Cup, Salon e Periodic Table'),
I('py','Python OO (Curso em Vídeo, Mundo 4)','c',40,20,'aula',0,'a',[],[['Curso em Vídeo','https://www.cursoemvideo.com']],'classes, herança, polimorfismo, UML'),
I('git','Git e GitHub (Estudonauta)','c',6,8,'aula',1,'a',[],[ES('git-e-github'),['Pro Git','https://git-scm.com/book/pt-br/v2']],'Git Flow, rebase vs merge, conflitos, pull request'),
I('sec1','Segurança para Devs, nível 1 (Rocketseat)','c',10,10,'aula',1,'v',['git'],[RK],'autenticação e HTTP'),
I('P1','Projeto 1: API completa','p',48,0,'',0,'v',['adonis','sql'],[],''),
I('js','JavaScript (freeCodeCamp)','c',35,20,'etapa',1,'a',[],[FC('javascript')],'async/await, funções de ordem superior, debugging, regex, datas'),
I('fel','Front-End Libraries: React (freeCodeCamp)','c',35,15,'etapa',1,'a',['sql'],[FC('front-end-development-libraries')],'hooks, estado, roteamento, performance, testes'),
I('next','Next.js (curso oficial)','c',20,15,'capítulo',1,'a',['fel'],[['Next.js Learn','https://nextjs.org/learn']],'App Router, Server Components, Server Actions, autenticação'),
I('tw','Tailwind CSS (B7Web)','c',8,10,'aula',1,'v',[],[B7,['Docs','https://tailwindcss.com/docs']],'utilitários, responsivo, tema'),
I('ts','TypeScript (B7Web e documentação)','d',20,0,'',1,'a',[],[B7,['Docs','https://www.typescriptlang.org/docs/']],'tipos básicos; interfaces e type; generics; narrowing; utility types; tipagem de APIs; Zod'),
I('P2','Projeto 2: front com a API','p',48,0,'',0,'v',['P1','next','ts'],[],''),
I('api','Back-End e APIs (freeCodeCamp)','c',60,20,'etapa',1,'a',['P1'],[['freeCodeCamp','https://www.freecodecamp.org/portuguese/learn/back-end-development-and-apis-v9/']],'middleware, erros, paginação, WebSockets, segurança'),
I('rwd','Responsive Web Design (freeCodeCamp)','c',15,10,'etapa',1,'a',[],[FC('responsive-web-design')],'flexbox, grid, acessibilidade, formulários'),
I('test','Testes automatizados','d',25,0,'',1,'v',['js'],[['Vitest','https://vitest.dev'],['Playwright','https://playwright.dev']],'testes unitários com Vitest; testes de rota com Japa; mocks e stubs; testes de componente; e2e com Playwright'),
I('linux','Linux (Estudonauta, Módulo 00)','c',8,8,'aula',1,'v',[],[ES('linux-modulo-00')],'shell, permissões, usuários, SSH'),
I('docker','Docker e docker-compose','d',15,0,'',1,'v',['linux'],[['Docker','https://docs.docker.com/get-started/']],'imagem e container; Dockerfile; volumes e redes; multi-stage build; compose com banco'),
I('ci','CI/CD com GitHub Actions','d',8,0,'',1,'v',['test','git'],[['Docs','https://docs.github.com/actions']],'workflow básico; testes a cada PR; cache; secrets; deploy automático'),
I('deploy','Deploy, HTTPS e variáveis de ambiente','d',12,0,'',1,'v',['docker'],[],'escolher hospedagem (Railway, Render ou VPS); domínio e DNS; HTTPS e TLS; variáveis de ambiente e segredos; healthcheck e rollback'),
I('sec2','Segurança para Devs, níveis 2 e 3 (Rocketseat)','c',17,17,'aula',1,'v',['sec1','fel'],[RK],'front e back, ambiente e infraestrutura'),
I('P3','Projeto 3: produção (Docker, CI e deploy)','p',60,0,'',0,'v',['P1','docker','ci','deploy'],[],''),
I('algo','Algoritmos e estruturas de dados','d',30,0,'',1,'v',[],[['NeetCode','https://neetcode.io']],'Big O; arrays e strings; hash maps; pilhas e filas; dois ponteiros; recursão; árvores e grafos'),
I('folio','Portfólio, LinkedIn e currículo','d',12,0,'',1,'v',['P3'],[['GitHub Pages','https://pages.github.com']],'exportar projetos.json da Trilha; publicar portfolio.html; README de perfil; LinkedIn completo; currículo para ATS'),
I('ent','Entrevistas técnicas e comportamentais','d',10,0,'',1,'v',['folio'],[],'simulado técnico; método STAR; explicar um projeto em 3 minutos; perguntas sobre trade-offs'),
I('psw','PortSwigger Web Security Academy','d',36,0,'',0,'v',['sec2'],[['PortSwigger','https://portswigger.net/web-security']],'SQL injection; XSS; CSRF; controle de acesso; autenticação; JWT; CORS'),
I('arch','Arquitetura de Sistemas (B7Web)','c',8,8,'aula',0,'v',['api'],[B7],'camadas, monólito vs microsserviços, cache, filas'),
I('orm','Drizzle ORM (B7Web)','c',10,10,'aula',0,'a',['api'],[B7,['Docs','https://orm.drizzle.team']],'migrações, N+1, transações, trade-offs frente ao SQL puro'),
I('ia','IA aplicada (APIs de LLM e RAG)','d',20,0,'',0,'v',['api'],[['Docs Anthropic','https://docs.claude.com']],'chamar uma API de LLM; streaming; controle de custo; embeddings e busca (RAG); erros e limites'),
I('P4','Projeto 4: IA ou dados','p',48,0,'',0,'v',['ia'],[],''),
I('aws','Nuvem: fundamentos de AWS','d',15,0,'',0,'v',['deploy'],[['Skill Builder','https://skillbuilder.aws']],'IAM; EC2; S3; RDS; Lambda; custos e free tier'),
I('data','Dados com Python e ETL','d',25,0,'',0,'v',['py','sql'],[['freeCodeCamp','https://www.freecodecamp.org/learn/']],'pandas; limpeza de dados; pipeline ETL; SQL analítico; dashboard simples'),
I('P5','Projeto 5: exploratório (em andamento vale)','p',40,0,'',0,'q',[],[],''),
I('nest','NestJS','d',30,0,'',0,'q',['api'],[['Docs','https://docs.nestjs.com']],'módulos; injeção de dependência; DTOs; guards; Prisma ou TypeORM'),
I('php','PHP (B7Web)','c',80,3,'curso',0,'q',[],[B7],'básico, intermediário e avançado'),
I('cs','C# e .NET','d',40,0,'',0,'q',[],[['Microsoft Learn','https://learn.microsoft.com/dotnet/']],'sintaxe; LINQ; ASP.NET Core; Entity Framework'),
I('java','Java e Spring','d',50,0,'',0,'q',[],[['dev.java','https://dev.java/learn/']],'POO; coleções; Spring Boot; JPA; Maven'),
I('cpp','C++','d',40,0,'',0,'q',[],[['LearnCpp','https://www.learncpp.com']],'ponteiros; memória; STL; RAII; CMake'),
I('uc','Secure Coding Practices (Coursera, UC Davis)','c',76,4,'curso',0,'v',['psw'],[['Coursera','https://www.coursera.org/specializations/secure-coding-practices']],'quatro cursos pagos; só o de ameaças e autenticação é prioritário'),
I('isc2','ISC2 CC (certificação)','d',40,0,'',0,'v',['uc'],[['ISC2','https://www.isc2.org/certifications/cc']],'princípios de segurança; continuidade; controle de acesso; redes; operações; exame'),
I('adv','Tópicos avançados de back-end','d',55,0,'',0,'v',['arch'],[['Redis','https://redis.io/docs/'],['GraphQL','https://graphql.org/learn/']],'Redis e filas; GraphQL; observabilidade; Kubernetes básico')
];
// [categoria do projeto, o que ele prova]. Os pré-requisitos vêm do item P1 a P5 da fila. Quatro completos e um em andamento até a busca por vagas.
const SLOTS=[
['Fundação: API completa','CRUD relacional com autenticação, validação e testes.'],
['Integração: front com API','React ou Next consumindo a API do P1, com login e formulários.'],
['Produção: Docker, CI e deploy','Colocar tudo no ar com HTTPS, CI verde e README de decisões.'],
['Diferencial: IA ou dados','Uma função com LLM ou um pipeline de dados com dados reais.'],
['Exploratório (em andamento vale)','NestJS, Java, C# ou algo novo: mostra velocidade de aprendizado.']
];
const CK=['README claro (como rodar)','Deploy público','Testes automatizados','CI verde','Trade-offs documentados','Página no portfólio'];
