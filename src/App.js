import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (taskInput.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">
          🚀 TeamTask
        </div>

        <div className="nav-right">
          <span className="online">
            ● Team Online
          </span>

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            ✨ COLLABORATIVE PROJECT
          </div>

          <h1>
            Build Together.
Ship Together — Rushikesh 🚀
            <br />
            <span>Ship Together.</span>
          </h1>

          <p>
            A simple interactive task board designed
            for GitHub collaboration.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("tasks")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Adding Tasks →
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                alert(
                  "Create a Git branch → Make changes → Commit → Push → Pull Request → Merge!"
                )
              }
            >
              How Collaboration Works
            </button>

          </div>

        </div>

      </section>


      {/* STATISTICS */}

      <section className="stats-container">

        <div className="stat-card">
          <div className="stat-icon purple">
            📋
          </div>

          <div>
            <h2>{tasks.length}</h2>
            <p>Total Tasks</p>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon orange">
            ⏳
          </div>

          <div>
            <h2>{pendingTasks}</h2>
            <p>Pending</p>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon green">
            ✅
          </div>

          <div>
            <h2>{completedTasks}</h2>
            <p>Completed</p>
          </div>
        </div>

      </section>


      {/* TASK SECTION */}

      <main id="tasks" className="main-content">

        <div className="section-heading">

          <div>
            <h2>Team Tasks</h2>
            <p>
              Manage your team's work in one place.
            </p>
          </div>

          <div className="task-count">
            {tasks.length} Tasks
          </div>

        </div>


        {/* ADD TASK */}

        <div className="add-task-card">

          <input
            type="text"
            placeholder="What needs to be done?"
            value={taskInput}
            onChange={(e) =>
              setTaskInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button
            className="add-button"
            onClick={addTask}
          >
            + Add Task
          </button>

        </div>


        {/* SEARCH */}

        <div className="search-container">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        {/* TASK LIST */}

        <div className="task-list">

          {filteredTasks.length === 0 ? (

            <div className="empty-state">

              <div className="empty-icon">
                📋
              </div>

              <h3>
                No tasks found
              </h3>

              <p>
                Add a task above to get started.
              </p>

            </div>

          ) : (

            filteredTasks.map((task) => (

              <div
                className={
                  task.completed
                    ? "task-card completed-task"
                    : "task-card"
                }
                key={task.id}
              >

                <div
                  className="task-left"
                  onClick={() =>
                    toggleTask(task.id)
                  }
                >

                  <div
                    className={
                      task.completed
                        ? "checkbox checked"
                        : "checkbox"
                    }
                  >
                    {task.completed && "✓"}
                  </div>

                  <span>
                    {task.title}
                  </span>

                </div>

                <button
                  className="delete-button"
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  🗑️
                </button>

              </div>

            ))

          )}

        </div>

      </main>


      {/* COLLABORATION SECTION */}

      <section className="collaboration">

        <div className="collaboration-content">

          <div className="badge">
            👥 TEAM WORKFLOW
          </div>

          <h2>
            Collaborate with
            <span> GitHub</span>
          </h2>

          <p>
            Everyone works on their own branch,
            creates Pull Requests, reviews code,
            and merges features into the main project.
          </p>


          <div className="workflow">

            <div className="workflow-step">
              <div>1</div>
              <h3>Clone</h3>
              <p>Download the project</p>
            </div>

            <div className="arrow">→</div>

            <div className="workflow-step">
              <div>2</div>
              <h3>Branch</h3>
              <p>Create your feature</p>
            </div>

            <div className="arrow">→</div>

            <div className="workflow-step">
              <div>3</div>
              <h3>Code</h3>
              <p>Build your feature</p>
            </div>

            <div className="arrow">→</div>

            <div className="workflow-step">
              <div>4</div>
              <h3>Push</h3>
              <p>Upload your changes</p>
            </div>

            <div className="arrow">→</div>

            <div className="workflow-step">
              <div>5</div>
              <h3>Pull Request</h3>
              <p>Review & merge</p>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <h3>
          🚀 TeamTask
        </h3>

        <p>
          Built with React + GitHub
        </p>

        <p className="footer-small">
          Clone • Branch • Code • Commit • Push • Pull Request • Merge
        </p>

      </footer>

    </div>
  );
}

export default App;