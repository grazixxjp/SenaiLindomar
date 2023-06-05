from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
class Categorias(models.Model):
    tipo = models.CharField(max_length=255, unique=True)

    def __str__(self) -> str:
        return self.tipo

    class Meta:
        verbose_name_plural = 'Categorias'

class Produtos(models.Model):
    nome = models.CharField(max_length=255)
    qtd = models.IntegerField(validators=[MinValueValidator(0, message="A quantidade deve ser igual ou maior que 0 ")])
    preco = models.DecimalField(max_digits=6,decimal_places=2, validators=[MinValueValidator(1, message="O preço deve ser igual ou maior que 1 real"), MaxValueValidator(1000)])
    #categoria = models.CharField(max_length=50)
    descricao = models.TextField()
    validade = models.DateField()
    disponibilidade = models.BooleanField()
    #referenciar a categoria aqui 
    categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE)


    #sobrescrever um método
    def __str__(self) -> str:
        return self.nome

    class Meta:
        verbose_name_plural = 'Produtos'

class Clientes(models.Model):
    CLIENTE_FREE = 'F'
    CLIENTE_PREMIUM = 'P'
    CLIENTE_MASTER = 'M'

    TIPOS_CLIENTES = [
        (CLIENTE_FREE, 'Free'),
        (CLIENTE_PREMIUM, 'Premium'),
        (CLIENTE_MASTER, 'Master'),
    ]

    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    celular = models.CharField(max_length=14)
    cpf = models.CharField(max_length=14)
    data_nascimento = models.DateField()
    data_cadastro = models.DateField(auto_now=True)
    tipo_cliente = models.CharField(max_length=1, choices=TIPOS_CLIENTES, default=CLIENTE_FREE)
    # teste = models.UUIDField(primary_key=True, default=uuid.uuid4)
    
    def __str__(self) -> str:
        return self.nome

    class Meta:
        verbose_name_plural = 'Clientes'

class Pedidos(models.Model):
    PAGAMENTO_CARTAO_CREDITO = 'C'
    PAGAMENTO_CARTAO_DEBITO = 'D'
    PAGAMENTO_PIX = 'P'
    PAGAMENTO_BOLETO = 'B'

    LISTA_TIPOS_PAGAMENTO = [
        (PAGAMENTO_CARTAO_CREDITO, 'Cartão Crédito'),
        (PAGAMENTO_CARTAO_DEBITO, 'Cartão Débito'),
        (PAGAMENTO_PIX, 'PIX'),
        (PAGAMENTO_BOLETO, 'Boleto'),
    ]

    STATUS_PG_APROVADO = 'A'
    STATUS_PG_PENDENTE = 'P'
    STATUS_PG_RECUSADO = 'R'
    LISTA_STATUS_PAGAMENTO = [
        (STATUS_PG_APROVADO, 'Aprovado'),
        (STATUS_PG_RECUSADO, 'Recusado'),
        (STATUS_PG_PENDENTE, 'Pendente'),
    ]

    STATUS_PD_ENTREGUE = 'E'
    STATUS_PD_CANCELADO = 'X'
    STATUS_PD_CAMINHO = 'C'
    STATUS_PD_PREPARACAO = 'P'
    STATUS_PD_AGUARDANDO = 'A'

    LISTA_STATUS_PEDIDO = [
        (STATUS_PD_CANCELADO, 'Cancelado'),
        (STATUS_PD_ENTREGUE, 'Entregue'),
        (STATUS_PD_CAMINHO, 'À Caminho'),
        (STATUS_PD_PREPARACAO, 'Em Preparação'),
        (STATUS_PD_AGUARDANDO, 'Aguardando'),
    ]

    cliente = models.ForeignKey(Clientes, on_delete=models.PROTECT)
    data_pedido = models.DateField(auto_now=True)
    tipo_pagamento = models.CharField(max_length=1, choices=LISTA_TIPOS_PAGAMENTO, default=PAGAMENTO_PIX)
    status_pagamento = models.CharField(max_length=1, choices=LISTA_STATUS_PAGAMENTO, default=STATUS_PG_PENDENTE)  
    status_pedido = models.CharField(max_length=1, choices=LISTA_STATUS_PEDIDO, default=STATUS_PD_AGUARDANDO)
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        verbose_name_plural = 'Pedidos'

class PedidoItem(models.Model):
    quantidade = models.IntegerField(validators=[MinValueValidator(1, 'A quantidade não pode ser menor que 1')])
    preco_atual = models.DecimalField(max_digits=6, decimal_places=2)
    produto = models.ForeignKey(Produtos, on_delete=models.PROTECT)
    pedido = models.ForeignKey(Pedidos,on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=10, decimal_places=2)



    
    

