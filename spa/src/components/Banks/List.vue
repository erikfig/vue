<template>
    <div class="row">
        <div class="content-header">
            <h1>Bancos <small>{{sub_title}}</small></h1>
            <div class="grey-text">
                <small>
                    <a href="#/">iFinance</a> >
                    <span>Sues Bancos</span>
                </small>
            </div>
        </div>
        <div class="card col s12">

            <div class="card-content">

                <table class="highlight">
                    <thead>
                    <tr>
                        <th>Bancos</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(bank, $index) in banks.data" @click="goTo(bank.id)">
                        <td class="valign-wrapper">
                          {{$index +1}} - {{bank.title}} - ({{bank.code}})
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination totalPerPage="10" resource="banks"></pagination>
            </div>
        </div>
    </div>

</template>

<script>
    import Pagination from '../SharedComponents/Pagination.vue'
    export default {
        name: 'banks',
        data: function(){
            return {
                sub_title: 'Gerenciamento de Banco',
                banks1:{
                    total: 'total'
                }
            }
        },
        components:{
          'pagination':Pagination
        },
        methods: {
            goTo: function (id) {
                this.$router.push('/bancos/' + id)
            }
        },
        computed: {
            banks () {
                return this.$store.state.pagination.getList;
            }
        }
    }
</script>

<style>
tbody tr{cursor: pointer;}
</style>