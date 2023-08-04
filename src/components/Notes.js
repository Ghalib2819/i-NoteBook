import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

//component
const Notes = () => {


  const context = useContext(noteContext);
  let location = useNavigate();
  const navigateTo = (path) => {
    window.location.href = path;
  }
  const { notes, getNotes, editnotes } = context;
  const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
navigateTo('/login')
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const closeRef = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  };

  const handleclick = (e) => {
    editnotes(note.id, note.etitle, note.edescription, note.etag)
    closeRef.current.click();
  }


  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }


  return (
    <div className="row my-3">
      
      <AddNote/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <style>{'label,h4 {color: black;'}</style>

      <div  
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Edit Title
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" >
                    Title
                  </label>
                  <input
                    value={note.etitle}
                    onChange={onchange}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    value={note.edescription}
                    onChange={onchange}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    value={note.etag}
                    onChange={onchange}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={closeRef}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleclick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
      <h3>Your Notes</h3>
    
        <div className="container">
        {
          notes.length === 0 && "No notes for today"
        }
        </div>
        {notes.map((note) => {
          return <NoteItem updateNote={updateNote} key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
