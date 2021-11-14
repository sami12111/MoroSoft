import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TaskCard from "../taskcard/TaskCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsFillPencilFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import AddTaskForm from "../addtaskform/AddTaskForm";

const TodoList = () => {
  // getting initial task from Redux Store
  const initialTask = useSelector((state) => state.task);

  // all pending task will be here
  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    setTask(initialTask);
  }, [initialTask]);

  // all runnig task will be here
  const [doingTask, setdoingTask] = useState([]);

  // All done task will be here
  const [doneTask, setdoneTask] = useState([]);

  // function for dragging the task cards
  const handleDragEnd = (results) => {
    // return from here if task card is not dropped at dropabale area
    if (!results.destination) {
      return;
    }

    let add;
    let active = task;
    let doing = doingTask;
    let done = doneTask;

    if (results.source.droppableId === "to-do-task") {
      add = active[results.source.index];
      active.splice(results.source.index, 1);
    } else if (results.source.droppableId === "doing-task") {
      add = doing[results.source.index];
      doing.splice(results.source.index, 1);
    } else if (results.source.droppableId === "done-task") {
      add = done[results.source.index];
      done.splice(results.source.index, 1);
    }

    if (results.destination.droppableId === "to-do-task") {
      active.splice(results.destination.index, 0, add);
    } else if (results.destination.droppableId === "doing-task") {
      doing.splice(results.destination.index, 0, add);
    } else if (results.destination.droppableId === "done-task") {
      done.splice(results.destination.index, 0, add);
    }

    setTask(active);
    setdoingTask(doing);
    setdoneTask(done);
  };

  // for making header editable
  const [isContentEdit, setisContentEdit] = useState(false);

  // function to make header editable
  const handleEdit = () => {
    setisContentEdit(true);
  };

  return (
    <div className="to-do-list-wrapper container">
      <h1 className="text-center mb-4">TO DO APP</h1>

      <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
        <div className="row" id="to-do-row">
          <div className="col-md-3 column">
            <div className="column-heading d-flex justify-content-between align-items-center">
              <h1 contentEditable={isContentEdit ? "true" : "false"} suppressContentEditableWarning={true} onBlur={() => setisContentEdit(false)}>
                To Do
              </h1>
              <i onClick={handleEdit} title="Edit Content">
                <BsFillPencilFill />
              </i>
            </div>
            <Droppable droppableId="to-do-task">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {task.map((item, index) => (
                    <Draggable draggableId={item.title} index={index} key={item.title}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskCard data={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="col-md-3 column">
            <div className="column-heading d-flex justify-content-between align-items-center">
              <h1 contentEditable={isContentEdit ? "true" : "false"} suppressContentEditableWarning={true}>
                Doing
              </h1>
              <i onClick={handleEdit} title="Edit Content">
                <BsFillPencilFill />
              </i>
            </div>

            <Droppable droppableId="doing-task">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {doingTask.map((item, index) => (
                    <Draggable draggableId={item.title} index={index} key={item.title}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskCard data={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="col-md-3 column">
            <div className="column-heading d-flex justify-content-between align-items-center">
              <h1 contentEditable={isContentEdit ? "true" : "false"} suppressContentEditableWarning={true}>
                Done
              </h1>
              <i onClick={handleEdit} title="Edit Content">
                <BsFillPencilFill />
              </i>
            </div>

            <Droppable droppableId="done-task">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {doneTask.map((item, index) => (
                    <Draggable draggableId={item.title} index={index} key={item.title}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TaskCard data={item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
