# Projeto de Troca de Conhecimento

## Introdução

Este projeto é uma plataforma online para facilitar a troca de conhecimento entre usuários. Os usuários podem criar perfis, listar suas habilidades e buscar por outros usuários para realizar trocas de conhecimento.

## Cenários de BDD

\`\`\`markdown
### Story: Usuário quer acessar sua conta

#### Scenario: Usuário com conta criada
Given ele tenta acessar
When ele coloca seu usuário
Then a página é acessada

#### Scenario: Usuário sem conta criada
Given ele tenta acessar
When percebe que não tem conta
Then é redirecionado a página de criação de conta

### Story: Usuário está em busca de uma habilidade específica para fazer uma troca de conhecimento

#### Scenario: Usuário encontra outro usuário com a habilidade requerida
Given ele faz a pesquisa
When é apresentado a alguém que agrada seus requisitos
Then ele aceita fazer a troca
and é direcionado a página de troca de habilidades

#### Scenario: Usuário não encontra outro usuário com a habilidade requerida
Given ele faz a pesquisa
When é apresentado a alguém que não agrada seus requisitos
Then ele é direcionado a outro usuário

### Story: Usuário quer cadastrar um de seus conhecimentos para constar em seu perfil e ser selecionado em pesquisas futuras

#### Scenario: Usuário tem um certificado da habilidade
Given ele abre o perfil
When cadastra a habilidade com o certificado
Then a habilidade é adicionada ao perfil após análise do certificado

#### Scenario: Usuário tem um certificado inválido
Given ele abre o perfil
When cadastra a habilidade com o certificado
Then a habilidade não passa pela análise
and não é adicionada ao perfil

#### Scenario: Usuário não tem habilidade
Given ele abre o perfil
When observa o campo de cadastro de habilidade
Then ele sai em busca de novos conhecimentos

### Story: Usuário é localizado em busca de habilidade e recebe uma solicitação

#### Scenario: Usuário aceita o pedido de troca
Given ele recebe uma notificação de troca
When ele recebe uma oferta que lhe agrada
Then é dado andamento ao processo de troca

#### Scenario: Usuário nega o pedido de troca
Given ele recebe uma notificação de troca
When ele recebe uma oferta que não lhe agrada
Then o processo de troca é encerrado
and usuário que fez o pedido volta à tela de busca
\`\`\`

## Testes

Este projeto foi validado através de testes automatizados utilizando Selenium. Os testes foram registrados no plano de teste disponível na branch BDD. Além disso, há um vídeo no YouTube mostrando os testes rodando no Selenium IDE, disponível em (https://youtu.be/6216I6saHlI).
\`\`\`
```
