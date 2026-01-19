import "./App.css";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, reset, register } = useForm({
    defaultValues: {
      nomeCurso: "",
      data: "",
      categoria: "",
      descricao: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Curso</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Controller
          control={control}
          name="nomeCurso"
          render={(field) => (
            <input type="text" placeholder="Nome do curso" {...field} />
          )}
        /> */}

        <input
          type="text"
          placeholder="Nome do curso"
          {...register("nomeCurso", {
            required: "O nome do curso é obrigatório",
          })}
        />

        <span className="error">O nome do curso é obrigatório</span>

        {/* Campo de data de início */}
        <Controller
          control={control}
          name="data"
          render={({ field }) => (
            <input
              type="date"
              placeholder="Data de início"
              {...field}
              lang="pt-BR"
            />
          )}
        />

        {/* Seleção de categoria */}
        <Controller
          control={control}
          name="categoria"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Escolha a categoria...
              </option>
              <option value="programacao">Programação</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="outros">Outros</option>
            </select>
          )}
        />

        {/* Campo de descrição */}
        <Controller
          control={control}
          name="descricao"
          render={({ field }) => (
            <textarea placeholder="Descrição do curso" rows={4} {...field} />
          )}
        />

        {/* Botão */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
