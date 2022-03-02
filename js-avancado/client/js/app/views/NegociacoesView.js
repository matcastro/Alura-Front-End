class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento)
    }

    _template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(negociacao => {
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.quantidade * negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>
                            ${model.negociacoes.reduce((soma, negociacao) => soma + negociacao.volume, 0.0)}
                        </td>
                    </tr>
                </tfoot>
            </table> 
        `
    }
}