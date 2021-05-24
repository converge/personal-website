---
title: Gerando Especificacao OpenAPI com Go Lang e Swagger
category: golang
created-at: 2021-05-23T23:04:03.857+00:00
---

OpenAPI é uma padrão de formato p/ especificar o funcionamento de uma API. Existem várias ferramentas
ao redor dessa especificacão p/ auxiliar no desenvolvimento e manutencão de APIs, e existem maneiras
diferentes de gerar essa documentacão. Uma forma que eu gosto muito de gerar essa documentacão, é
as definindo ao lado das funcões da API em forma de documentacão.

### Os principais PROs gerando a documentacao da API dessa forma são:

- approach documentacao como código.
- a documentacão fica próxima da funcão que a utiliza, qualquer dúvida ou atualizacão, o que precisa
ser consultado e atualizado estão próximos.
- Em Go Lang, se algo está errado, o código não compila. Em outras palavras, se a definicão da API
estiver errada, você logo irá notar e pode rapidamente corrigi-la.
  
### Mão na massa!

#### 1. O primeiro passo é iniciar o seu projeto:

```bash
mkdir seu-projecto
cd $_
go mod init github.com/<seu-user>/seu-projeto
```

#### 2. Inicie sua API básica

Nesse example criaremos duas funcões, um GET e outro POST.

#### 2.1 Endpoint básico que mostra a versão

Iremos usar o router Chi, porque precisamos definir os verbos GET e POST no router e não fazendo a
validacão dentro da funcão pois a especificacão OpenAPI que iremos definir precisa ser exclusiva p/
cada método. Por exemplo, temos um endpoint [GET] `/teste`, neste endpoint definimos a especificacão
OpenAPI para este endpoint, quando tivermos um endpoint para a entidade teste ( `[POST] /teste` ),
precisaremos definir o POST na definicacão do endpoint [POST /teste]. Em poucas palavras, não podemos
ter a definicão de [GET] e [POST] na mesma funcão. 

```go
func main() {
	r := chi.NewRouter()
	r.Get("/", version)
	fmt.Println("API listening at port 3001...")
	err := http.ListenAndServe(":3001", r)
	if err != nil {
		log.Fatal(err)
	}
}
```

P/ informarmos a nossa API que uma especificacão OpenAPI será criada, nós criamos um endpoint chamado
`/swagger` e definimos a espcificacão inicial. Neste endpoint `/swagger` a documentacão auto gerada
estará disponível usando a UI do Swagger. P/ isso definimos este endpoint na API da seguinte forma:

```go
r.Get("/swagger/*", httpSwagger.WrapHandler)
```

E adicionar a especificacão OpenAPI p/ a funcão main, que ficará:
```go
// @title Titulo da sua API
// @version 1.0
// @description Descricão longa da sua API
// @termsOfService http://swagger.io/terms/
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
// @host localhost:3001
// @BasePath /
func main() {
    r := chi.NewRouter()
    r.Get("/", version)
    fmt.Println("API listening at port 3001...")
    err := http.ListenAndServe(":3001", r)
    if err != nil {
        log.Fatal(err)
    }
}
```

Agora podemos definir nosso exemplo p/ o endpoint `[GET] /` sem a especificacão OpenAPI:

```go
func version(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("version: 1.0.0"))
}
```

E agora podemos definir a especificacão OpenAPI da seguinte forma p/ este endpoint:

```go
// version godoc
// @Summary Get API version
// @Description Get API version
// @Tags version
// @Accept  json
// @Produce  json
// @Success 200 {object} string
// @Router / [get]
```

Neste ponto podemos chamar o `swat init`, que irá criar os arquivos necessários p/ posteriormente
chamarmos o Swagger UI, que é a interface gráfica que mostra a documentacão com uma interface gráfica.

Então novamente, os passos são:

```bash
swag init
go run main.go
```

Abra a Swagger UI através do endereco http://localhost:3001/swagger/



