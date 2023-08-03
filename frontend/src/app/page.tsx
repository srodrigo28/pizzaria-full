import styles from "./../styles/Home.module.scss"
import logoImg from './../assets/logo.svg'
import Image from 'next/image'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.containerCenter}>
      <h1>Sistema de Pizza</h1>
        <Image src={logoImg} alt="Logo" />

        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu E-mail" />
            <Input placeholder="Sua Senha" />
            <Button loading={false}> Acessar </Button>
          </form>
            <a href="/signup" className={styles.text}>Não possui conta cadastra-se</a>
        </div>
      </div>
    </main>
  )
}
