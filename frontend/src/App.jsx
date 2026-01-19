import "./App.css";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({});

export default function App() {
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      nomeCurso: "",
      data: "",
      categoria: "",
      descricao: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
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

        {errors.nomeCurso && (
          <span className="error">{errors.nomeCurso.message}</span>
        )}

        {/* Campo de data de início */}
        <Controller
          control={control}
          name="data"
          rules={{required: true}}
          render={({ field }) => (
            <input
              type="date"
              placeholder="Data de início"
              {...field}
              lang="pt-BR"
            />
          )}
        />

          {errors.data && (
          <span className="error">A data de início é obrigatório</span>
        )}

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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando ..." : "Cadastrar" }
        </button>
      </form>
    </div>
  );
}
