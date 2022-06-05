# hackaffseguros

## Stack

<div align="center">
  <img width="500" alt="image" src="https://user-images.githubusercontent.com/6686410/172063580-99cc1688-63cc-4ae4-8d8b-51d8756ec5b1.png">
</div>

## Back-End

### Visão geral

API que o sistema consome com banco de dados

### Pré requisitos:

- Node
- Yarn

### Instalar dependências:

```bash
cd back-end
yarn install
```

### Executar

```
yarn dev
```

## Front-End

### Visão geral

Sistema web para realizar as solicitações do seguro e acompanhamento da solicitação.

### Pré requisitos:

- Node
- Yarn

### Instalar dependências:

```bash
cd front-end
yarn install
```

### Executar

```
yarn start
```

## OCR

### Visão geral

Algoritmo para realizar a classificação do seguro com base nos anexos em PDF

### Exemplo

Foi dado como entrada para o algoritmo os relatórios anuais da [Petrobras](ocr/petrobras.pdf), [Vale](ocr/vale.pdf) e [Marfrig](ocr/marfrig.pdf)

<img width="362" alt="image" src="https://user-images.githubusercontent.com/6686410/172062934-71c8b4e6-880a-4311-8dbf-84025c2c8891.png">

### Pré requisitos:

- Python 3.8.9
- Pip 22.1.2
- Jupyter

### Instalar dependências

```bash
cd ocr
python3 -m pip install -r requirements.txt
```

### Executar

```bash
python3 -m notebook classification.ipynb
```
