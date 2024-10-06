const TodoItem = {
  template: `<h1>Lista de Atendimento</h1>`
}
const app = Vue.createApp({
  components: {
    TodoItem 
  },
   data() {
        return {
            tipo: null,
            senha: null,
            atendimento: [],
            atendimentoEspecial: []
          }
        },
        methods: {
            adicionarSenha() {
              let senha = {
                id: this.atendimento.length + 1,
                tipo: "N",
                senha: this.atendimento.length + 1
              }
              this.atendimento.push(senha)
              this.tipo = null
              this.senha = null
            },
            removerSenha(senha) {
              const i = this.atendimento.indexOf(senha)
              if (i > -1) {
                this.atendimento.splice(i, 1)
              }
            },
            adicionarSenhaEspecial() {
              let senha = {
                id: this.atendimentoEspecial.length + 1,
                tipo: "E",
                senha: this.atendimentoEspecial.length + 1
              }
              this.atendimentoEspecial.push(senha)
              this.tipo = null
              this.senha = null
            },
            removerSenhaEspecial(senha) {
              const i = this.atendimentoEspecial.indexOf(senha)
              if (i > -1) {
                this.atendimentoEspecial.splice(i, 1)
              }
            }
          },
        template: 
        `
        <todo-item></todo-item>
        <div class="container">

        <p>Lista de Atendimento</p>

          <div class="form-group" style="display: flex; gap: 10px;">

          <form v-on:submit.prevent="adicionarSenha">

            <button >Adicionar</button>

          </form>

          <form v-on:submit.prevent="adicionarSenhaEspecial">

            <button> Adicionar Especial </button>

          </form>

          </div>
          
          <p>Senhas</p>

          <ul style="display: flex; gap: 10px; list-style: none;">

              <li v-for="senha in atendimento" >{{senha.tipo}}{{senha.senha}} <button @click="removerSenha(senha)">x</button></li>

          </ul>

          <ul style="display: flex; gap: 10px; list-style: none;">

              <li v-for="senha in atendimentoEspecial"> {{senha.tipo}}{{senha.senha}} <button @click="removerSenhaEspecial(senha)"> x </button> </li>

          </ul>
        </div>
        `,
   })
   
   app.mount('#app')
 