from django.urls import path
from . import views

urlpatterns = [
    path("clientes-new/", view= views.ListarClientes.as_view()),
    path("clientes/", view= views.listar_clientes),
    path("clientes-new/<int:pk>/", view= views.DetalharClientes.as_view()),
    path("clientes/<int:id>", view= views.detalhe_cliente),
    path("categorias/", view= views.listar_categorias),
    path("categorias/<int:id>", view= views.detalhe_categoria),
    path("produtos/", view= views.listar_produtos),
    path("produtos-new/<int:pk>", view= views.DetalharProdutos.as_view()),
    path("produtos/<int:id>", view= views.detalhe_produto),
    path("produtos-new/<int:pk>", view= views.ListarProdutos.as_view()),
    path("pedidos/", view= views.listar_pedidos),
    path("pedidos-new/<int:pk>/", view= views.ListarPedidos.as_view()),
    path("pedidos/<int:id>", view= views.detalhe_pedido),
    path("pedidosItem/", view= views.listar_pedidoItem),
    path("pedidosItem-new/<int:pk>/", view= views.DetalharPedidosItem.as_view()),
    path("pedidosItem/<int:id>", view= views.detalhe_pedidoItem),
]