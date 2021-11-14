import React from "react";
import "./AddTaskForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newTask = {
      title: values.title,
      description: values.description,
    };
    // console.log(newTask);
    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    resetForm();
  };

  return (
    <div className="add-task-from-wrapper container mb-5">
      <h1 className="text-center mb-4">Add New Task</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Task Title
            </label>
            <Field className="form-control shadow-none" name="title" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="title" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Task Description
            </label>
            <Field as="textarea" className="form-control shadow-none" name="description" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="description" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTaskForm;
