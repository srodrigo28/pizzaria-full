import styles from "./signup.module.scss"
export default function Signup() {
  return (
    <main className={styles.container}>
      <div className={styles.containerCenter}>
        <div className={styles.login}>
          <h1>Cadastro</h1>
            <form >
              <input placeholder="Digite seu E-mail" />
              <input placeholder="Sua Senha" />
              <button> Acessar </button>
            </form>
            <a href="#">Não possui conta cadastra-se</a>
          </div>
        </div>
      </main>
  )
}
