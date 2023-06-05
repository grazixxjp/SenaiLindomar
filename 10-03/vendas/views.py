# Ela vai extrair informações do model 
from django.shortcuts import render, get_object_or_404
from .models import Produtos, Clientes, Categorias, PedidoItem, Pedidos
from .serializer import ClienteSerializer, CategoriaSerializer, ProdutosSerializer, PedidosSerializer, PedidoItemSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view 
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.

class ListarClientes(ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer

class DetalharClientes(RetrieveUpdateDestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClienteSerializer
    
class DetalharProdutos(RetrieveUpdateDestroyAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    def delete(self, request, *args, **kwargs):
        produto = get_object_or_404(Produtos, pk=kwargs['pk'])
        if produto.qtd > 0 and produto.disponibilidade:
            return Response({"message":"Não é possivel excluir pois ainda existe no estoque"}, 
                            status=status.HTTP_400_BAD_REQUEST)
        else:
            produto.delete()
            produto.qtd -= 1
            produto.save()
            return Response({"message": produto.qtd})
   
class ListarProdutos(ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
   
class ListarPedidos(ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    
class DetalharPedidosItem(RetrieveUpdateDestroyAPIView):
    queryset = PedidoItem.objects.all()
    serializer_class = PedidoItemSerializer


#decorator + api 
#CLIENTES
@api_view(['GET', 'POST'])
#Função para mostrar os produtos usando o serializer
def listar_clientes(request):
    if request.method == 'GET':
        # queryset = armazena os dados da consulta do db através da query
        queryset = Clientes.objects.all()
        #Serializer = ele é responsável pela conversão
        serializer = ClienteSerializer(queryset, many = True)
        #retorna a resposta da chamada
        return Response(serializer.data)
    elif request.method == 'POST':
        #como salvar no banco o request
        serializer= ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        pass

@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_cliente(request, id):
    # try:
    #     Cliente = Clientes.objects.get(pk=id)
    # except Clientes.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)

    cliente = get_object_or_404(Clientes, pk=id)
    
    if request.method == 'GET':
        serializer= ClienteSerializer(cliente)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ClienteSerializer(cliente, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cliente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#CATEGORIAS  
@api_view(['GET', 'POST'])
def listar_categorias(request):
    if request.method == 'GET':
        queryset = Categorias.objects.all()
        serializer = CategoriaSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer= CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        pass

@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_categoria(request, id):
    try:
        categoria = Categorias.objects.get(pk=id)
    except Categorias.DoesNotExist:
        return Response('Categoria não encontrada', status=status.HTTP_404_NOT_FOUND )

    if request.method == 'GET':
        serializer = CategoriaSerializer(categoria)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategoriaSerializer(categoria, data=request.data)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        try: 
            produto = Produtos.objects.filter(pk=id)
            return Response("Essa categoria não pode ser excluída, pois existe um produto nela")
        except:
            categoria.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
#PRODUTOS
@api_view(['GET', 'POST'])
def listar_produtos(request):
    if request.method == 'GET':
        queryset = Produtos.objects.all()
        serializer = ProdutosSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer= ProdutosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        pass

@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_produto(request, id):
    try:
        produto = Produtos.objects.get(pk=id)
    except Produtos.DoesNotExist:
        return Response('Produto não encontrado', status=status.HTTP_404_NOT_FOUND )

    if request.method == 'GET':
        serializer = ProdutosSerializer(produto)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProdutosSerializer(produto, data=request.data)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        if produto.qtd > 0:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            produto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)     
    
#PEDIDOS
@api_view(['GET', 'POST'])
def listar_pedidos(request):
    if request.method == 'GET':
        queryset = Pedidos.objects.all()
        serializer = PedidosSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer= PedidosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        pass

@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_pedido(request, id):
    try:
        pedidos = Pedidos.objects.get(pk=id)
    except Pedidos.DoesNotExist:
        return Response('Pedido não encontrado', status=status.HTTP_404_NOT_FOUND )

    if request.method == 'GET':
        serializer = PedidosSerializer(pedidos)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PedidosSerializer(pedidos, data=request.data)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        pedidos.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#PEDIDO ITEM
@api_view(['GET', 'POST'])
def listar_pedidoItem(request):
    if request.method == 'GET':
        queryset = PedidoItem.objects.all()
        serializer = PedidoItemSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer= PedidoItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        pass

@api_view(['GET', 'PUT', 'DELETE'])
def detalhe_pedidoItem(request, id):
    try:
        pedido_item = PedidoItem.objects.get(pk=id)
    except PedidoItem.DoesNotExist:
        return Response('Item do pedido não encontrado', status=status.HTTP_404_NOT_FOUND )

    if request.method == 'GET':
        serializer = PedidoItemSerializer(pedido_item)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PedidoItemSerializer(pedido_item, data=request.data)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        pedido_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)