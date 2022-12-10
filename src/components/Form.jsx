import React from 'react';
import { useForm } from "react-hook-form";
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import Label from './Label';

function Form({ setWords }) {
    
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm();

    const onSubmit = ({ word, translation }) => {
        setWords(prev => [...prev, {id: Date.now(), word, translation}]);
        clearErrors();
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col col-md-6 col-lg-4 m-auto mt-3">
                <div className="mb-3">
                    <Label htmlFor="word">Слово</Label>
                    <Input register={register("word", {required: true, maxLength: 15})} name="word" type="text" id="word" className={"form-control" + (errors.word ? " is-invalid" : "")} />
                    {errors.word?.type === "required" && <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>}
                    {errors.word?.type === "maxLength" && <ErrorMessage>Максимальная длина слова 15 символов</ErrorMessage>}
                </div>
                <div className="mb-3">
                    <Label htmlFor="translation">Перевод</Label>
                    <Input register={register("translation", {required: true, maxLength: 20})} name="translation" type="text" id="translation" className={"form-control" + (errors.translation ? " is-invalid" : "")} />
                    {errors.translation?.type === "required" && <ErrorMessage>Поле обязательно для заполнения</ErrorMessage>}
                    {errors.translation?.type === "maxLength" && <ErrorMessage>Максимальная длина слова 15 символов</ErrorMessage>}
                </div>
                <div className="mb-3">
                    <Button type="success">Добавить</Button>
                </div>  
            </div>
        </form>
    )
}

export default Form