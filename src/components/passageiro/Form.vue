<template>
    <section class="column widget">
        <section class="painel">
            <div class="container">
               <div class="columns">
                    <div class="column is-6">
                        <h1 class="title">
                            Passageiros 
                        </h1>
                    </div>

                    <div class="column is-6 has-text-right">
                        <a href="#/passageiro/list" class="button is-medium">
                            <span class="icon">
                            <i class="fa fa-arrow-left"></i>
                            </span>
                            <span>voltar</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr>
        </section>
        <div>
            <div class="columns">
                <div class="column">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Encontrar</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-6">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Destino</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <select class="input" placeholder="0">
                                        <option>Selecione</option>
                                        <option>UVV</option>
                                        <option>Multivix</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column is-4">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Horário</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="00:00">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column is-2 has-text-right" style="margin-top:20px">
                    <a class="button">
                        <span class="icon is-small">
                        <i class="fa fa-plus"></i>
                        </span>
                        <span>Adicionar</span>
                    </a>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th>Destino</th>
                        <th>Horário</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UVV - Boa vista</td>
                        <td>07:00</td>
                        <td class="has-text-right">
                            <button class="button has-text-right">
                                <i class="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>UVV - Boa vista</td>
                        <td>07:00</td>
                        <td class="has-text-right">
                            <button class="button has-text-right">
                                <i class="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>UVV - Boa vista</td>
                        <td>07:00</td>
                        <td class="has-text-right">
                            <button class="button has-text-right">
                                <i class="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="columns">
                 <div class="column is-12 has-text-right">
                    <hr>
                    <a class="button is-warning is-large">
                        <span class="icon">
                        <i class="fa fa-check"></i>
                        </span>
                        <span>Salvar</span>
                    </a>
                </div>
            </div>
        </div> 
    </section>
</template>
