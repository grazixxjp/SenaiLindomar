from rest_framework import serializers
from .models import Clientes, Produtos, Categorias, PedidoItem, Pedidos

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['id', 'nome', 'email','celular', 'cpf', 'data_nascimento', 'data_cadastro', 'tipo_cliente']

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ['id','tipo']

class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id', 'nome', 'qtd','preco', 'descricao', 'validade', 'disponibilidade', 'categoria']

class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id', 'cliente', 'data_pedido','tipo_pagamento', 'status_pagamento', 'status_pedido', 'valor_total']

class PedidoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidoItem
        fields = ['id', 'quantidade', 'preco_atual','produto', 'pedido', 'total']


