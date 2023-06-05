from django.contrib import admin, messages
from django.db.models import QuerySet
from . import models
# Register your models here.
#admin.site.register(models.Produtos)

#decorator
admin.site.register(models.Categorias)

@admin.register(models.Clientes)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ['id',  'nome', 'tipo_cliente']
    list_editable = ['nome', 'tipo_cliente']
    list_filter = ['tipo_cliente', 'data_cadastro']
   
class FiltroEstoque(admin.SimpleListFilter):
    title = 'Filtro Estoque'
    parameter_name = 'qtd'

    def lookups(self, request, model_admin):
        return [
            ('<10', 'Estoque Baixo'),
            ('0', 'Zerado'),
            ('>=10', 'OK')
        ]
    
    #lte = menor igual
    #gte = maior igual
    #lt = menor
    #gt = maior
    #eq = igual (no django usa apenas o =)
    def queryset(self, request, queryset: QuerySet):
        if self.value() == '<10':
            #SELECT * FROM PRODUTOS WHERE QTD <= 10 AND QTD >= 1
            return queryset.filter(qtd__lte=10, qtd__gte=1)
        if self.value() == '0':
            return queryset.filter(qtd=0)
        if self.value() == '>=10':
            return queryset.filter(qtd__gt=10)


@admin.register(models.Produtos)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ['nome', 'preco', 'qtd', 'avaliar_estoque', 'categoria', 'validade', 'disponibilidade']
    list_editable = ['qtd']
    actions = ['zerar_estoque', 'aumentar_preco_30']
    search_fields = ['nome__istartswith']
    list_filter = [FiltroEstoque]

    @admin.display(ordering='qtd')
    def avaliar_estoque(self, produto):
        resposta = ''
        if produto.qtd == 0:
            return 'Zerado'
        if  produto.qtd < 10:
            return 'Estoque Baixo'
        if produto.qtd >= 10:
            return 'Estoque OK'

    @admin.action(description="+30 %% no preço")
    def aumentar_preco_30(self, request, queryset):
        percentual = (30/100)
        total_produtos = len(queryset)
        for produto in queryset:
            preco_antigo = float(produto.preco)
            preco_novo = preco_antigo + preco_antigo * percentual
            produto.preco = preco_novo
            produto.save()

    @admin.action(description="Zerar Estoque")
    def zerar_estoque(self, request, queryset):
        total_atualizado = queryset.update(qtd=0)
        self.message_user(
            request, f'{total_atualizado} produtos foram atualizados',
            messages.SUCCESS
        )

#AUTENTICAR != CADASTRAR
#AUTENTICAR = LOGAR
#TABELA CLIENTES - VERIFICAR EMAIL E SENHA
#JWT = JSON WEB TOKEN - validade padrão 5min
#JWT Refresh Token = 24hrs
#TODAS AS REQUISIÇÕES NA API SERÃO FEITAS PASSANDO JWT


class PedidoItemInline(admin.TabularInline):
    model = models.PedidoItem
    readonly_fields = ['preco_atual', 'total']

@admin.register(models.Pedidos)
class PedidosAdmin(admin.ModelAdmin):
    list_display = ['id', 'cliente', 'valor_total', 'data_pedido', 'status_pedido', 'status_pagamento']
    inlines = [PedidoItemInline]
 
    def save_formset(self, request, form, formset, change) -> None:
        instances = formset.save(commit=False)
        for instance in instances:
            instance.preco_atual = instance.produto.preco
            instance.total = instance.quantidade * instance.preco_atual
            instance.save()

        return super().save_formset(request, form, formset, change)
    
    def save_model(self, request, obj, form, change) -> None:
        return super().save_model(request, obj, form, change)
    



        
    
            
    
