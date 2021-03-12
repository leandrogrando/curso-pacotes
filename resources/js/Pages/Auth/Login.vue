<template>
  <empty-layout>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Entrar</div>

                    <div class="card-body">
                        <form method="POST" :action="route('login')">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-mail</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" :class="{'form-control' : true, 'is-invalid' : $page.props.errors.credentials}" name="email" required autocomplete="email" autofocus>

                                    <span class="invalid-feedback" role="alert" v-if="$page.props.errors.credentials">
                                        <strong>{{ $page.props.errors.credentials }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password">

                                        <span class="invalid-feedback" role="alert">
                                            <strong>A</strong>
                                        </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Permanecer logado
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Entrar
                                </button>

                                <a class="btn btn-link" :href="route('register')">
                                    Criar conta
                                </a>
                            </div>
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </empty-layout>
</template>

<script>
  import EmptyLayout from '../../Layouts/EmptyLayout'

  export default {

    layout: (h, page) => {
      return h(EmptyLayout, [
        h(EmptyLayout, [page]),
      ])
    },

    components: {
      EmptyLayout,
    },
    props: {
      user: Object,
      layout: null
    },
  }
</script>
