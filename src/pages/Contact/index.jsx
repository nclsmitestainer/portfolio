import React from "react";
import { SocialMedia, ContainerForm, Form } from "./styled";
import Introducion from "../../components/Introducion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useForm from "../../hooks/useForm";
import TextArea from "../../components/Form/TextArea";

const Contact = () => {
  const name = useForm("name");
  const email = useForm("email");
  const subject = useForm("subject");
  const message = useForm("message");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name?.value.length < 3) {
      toast.error("Verifique se nome está correto!");
      setLoading(false);
      return;
    }
    if (email?.value.length === 0) {
      toast.error("Preencha o email!");
      setLoading(false);
      return;
    }
    if (subject?.value.length < 3) {
      toast.error("Verifique se o assunto está correto!");
      setLoading(false);
      return;
    }
    if (message?.value.length < 10) {
      toast.error("Verifique se mensagem está correto!");
      setLoading(false);
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("subject", subject.value);
    formData.append("message", message.value);
    formData.append("accessKey", "5966d6e0-37aa-4918-ab59-fb55b175b896");

    const data = Object.fromEntries(formData.entries());

    const res = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();
    if (json.success) {
      toast.success(
        "Seu formulário foi enviado, obrigado por entrar em contato! Responderei em breve.",
      );
      formData.delete("name");
      formData.delete("email");
      formData.delete("subject");
      formData.delete("message");
      formData.delete("accessKey");
      name.setValue("");
      email.setValue("");
      subject.setValue("");
      message.setValue("");
      setLoading(false);
    } else {
      toast.error("Erro ao enviar formulário.");
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Introducion
        title="Vamos trabalhar juntos"
        subtitle="Para consultar possíveis negócios e parcerias, entre em contato comigo abaixo!"
      />

      <SocialMedia>
        <h3>Minhas redes sociais</h3>
        <div>
          <a
            href="https://www.linkedin.com/in/nicolas-mitestainer/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/nclsmitestainer"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://wa.me/5519998554441?text=Ol%C3%A1%2C+me+interessei+pelo+seu+trabalho."
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </a>
        </div>
      </SocialMedia>

      <ContainerForm>
        <div>
          <h3>Me mande um email, de forma clássica</h3>
          <p>
            Gosto muito de interagir com outras pessoas, seja programadores,
            estudantes ou entusiastas de tecnologia. Caso se interessou pelo meu
            trabalho ou queira trocar uma ideia, me mande uma mensagem e vamos
            bater um papo.
          </p>
        </div>
        <Form
          onSubmit={(e) => {
            name.validate();
            email.validate();
            subject.validate();
            message.validate();
            handleSubmit(e);
          }}
        >
          <Input
            id="name"
            label="Nome"
            type="text"
            name="name"
            placeholder="Ex: Nicolas Mitestainer"
            {...name}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Ex: nicolas@email.com"
            {...email}
          />
          <Input
            id="subject"
            label="Assunto"
            type="text"
            name="subject"
            placeholder="Ex: Me interessei pelo seu trabalho"
            {...subject}
          />
          <TextArea
            label="Mensagem"
            id="message"
            name="message"
            placeholder="Escreva o que deseja conversar."
            {...message}
          />
          {loading === true ? (
            <Button disabled type="submit">
              Enviando...
            </Button>
          ) : (
            <Button type="submit">Enviar</Button>
          )}
        </Form>
      </ContainerForm>
    </>
  );
};

export default Contact;
