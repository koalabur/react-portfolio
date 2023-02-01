// React
import { useState, useEffect, useContext } from "react";

// Next
import Image from "next/image";

// Framer motion
import { AnimatePresence, motion } from "framer-motion";

// Styles
import styles from "/styles/preLoader/v1.module.scss";

// Context
import { AppContext } from "../../context/GlobalState";

// Loops through about items from parent
export default function PreLoader() {
  // Local state
  const [facts, setFacts] = useState([
    // If api call fails then show this fact
    {
      fact: "Business.com is currently the most expensive domain name sold for $7.5 million",
    },
  ]);
  // Used to index the facts in the facts state
  const [factNumber, setFactNumber] = useState(0);
  const [factNumberValidate, setFactNumberValidate] = useState(false);
  // Used to show buttons
  const [showBtns, setShowBtns] = useState(false);
  const { isSiteReady, setIsSiteReady } = useContext(AppContext);

  function randomFact() {
    const length = facts.length;
    setFactNumber(Math.floor(Math.random() * length));
    setFactNumberValidate(false);
  }

  function incrementFactNumber(e) {
    e.preventDefault();
    if (factNumber === 29) {
      setFactNumberValidate(true);
    } else {
      setFactNumberValidate(false);
      setFactNumber((prevState) => prevState + 1);
    }
  }

  function decrementFactNumber(e) {
    e.preventDefault();
    if (factNumber === 0) {
      setFactNumberValidate(true);
    } else {
      setFactNumberValidate(false);
      setFactNumber((prevState) => prevState - 1);
    }
  }

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/facts?limit=30", {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.API_NINJA,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setFacts(result);
      })
      .catch((e) => {
        console.log(e);
      });

    setTimeout(() => {
      setShowBtns(true);
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    !isSiteReady
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isSiteReady]);

  return (
    <section className={styles.facts}>
      <Image
        className={styles.facts__img}
        src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDUiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMC45NTcgNTMyLjY3NyAzMTkuMDg4IDUwLjE5YTI3LjI4MiAyNy4yODIgMCAwIDAgMjQuMDY0LTguMTc2YzIyLjk3LTI0LjI4IDcxLjg1Ni05OS42MzQgNzMuMjg2LTMwMi4wMkM0NDguMTYxIDE2NC4zMjggNTA0LjggODguMzUgNTI5LjIxMyA2MC42QTcuOTA3IDcuOTA3IDAgMCAwIDUyNCA0Ny40OTRMMTg3LjYwOCAxNi44NzZhMTguMzQ1IDE4LjM0NSAwIDAgMC0xNS4yNjEgNS45NThjLTE5LjgxNCAyMS44NjUtNzguNiA5Ny4xMjQtODkuMjc3IDIzMC4yNWE3LjMgNy4zIDAgMCAwIDIuMzI3IDUuOTMxbDMyLjEyOSAyOS42NjdhNS41MjYgNS41MjYgMCAwIDEtMi4xOSA5LjM2MWwtMjcuMTUgNy45ODRhNy4yNjkgNy4yNjkgMCAwIDAtNS4yMjIgNi41OTNDNzcuNjE2IDQxOS4yNjcgNDAuMTkyIDQ5NC4zNTEgMjUuMTQgNTIwLjU1NWE4LjE2IDguMTYgMCAwIDAgNS44MTcgMTIuMTIyWm0xNTYuNjItODQuNGMtNy42OTQtMzQuOTY1IDQ5Ljg0LTQ5LjcgNTEuOTI1LTYuOTkyIDEuNjUgMzEuNDg4LTQzLjczMiAzNy43NS01MS45MjUgNi45OTdabS05LjQyNS0yNzguMTk1YzMuODE1LTE5LjQ4MSAxNy4wMjUtMzMuNzk0IDMzLjc4My00My45NDYgNjEuMzgzLTM3LjE4NiAxMDkuMTk0LTE5Ljk3OCAxMzguNTM3IDMuODUzIDU5LjkyNiA0OC42NzIgNTUuMDc0IDEyNy40MDYtMS41ODYgMTQ4Ljc0OS0yOC40NDggMTAuNzE2LTc0LjYxIDYuMDY3LTEwNi4zMTYgODMuNjE2LTguMDc0IDE5Ljc0OC00NC44OTQgNS45MTEtMzQuMjMtMjguNDc2IDEyLjk3LTQxLjgyMSA0My43NjEtNjYuNzY4IDgxLjAxMS04Mi41MzMgNTUuMDM5LTIzLjI5MyAzOC4xOC02NCAyMi43ODMtODEuNjkyLTE3LjM1MS0xOS4wMDctNzkuOTgxLTMwLjE0My0xMDIuNSAyNi40ODEtNi4zNjggMTYuMDI1LTQwLjA4IDE3Ljg1Mi0zMS40ODItMjYuMDQ3Wk00OTguNDA1IDMxNy42OGMuMjc1IDEyMC41ODQtMjQuNjU2IDIwMS44Mi0zNy4yMDUgMjM1LjAyYTQuMjY1IDQuMjY1IDAgMCAwIDQuNyA1LjcwOSAxNS4xMzIgMTUuMTMyIDAgMCAwIDExLjgwNi05LjkwN2MzLjY2NS0xMC40MjYgNy45LTIzLjc5IDEyLjEzNS00MC4wMjkgMTAuNC0zOS44NTYgMjIuNzYtMTA1LjMxNyAyMi41NjUtMTkwLjgyNi0uMTk1LTg0Ljk0NyAyMi40NjgtMTM0LjgxNSAzOC40NDQtMTYzLjA2QTE0NyAxNDcgMCAwIDEgNTczLjkgMTIzLjRhNy4xMDcgNy4xMDcgMCAwIDAgLjk4OC04LjczN2wtLjAxOC0uMDI5YTYuOSA2LjkgMCAwIDAtMTAuNzU1LTEuMjczIDE1OS40ODYgMTU5LjQ4NiAwIDAgMC0yNC43NjggMzMuMTM5Yy0xNy4xMjEgMjkuNzgxLTQxLjE0NyA4Mi4zMDgtNDAuOTQyIDE3MS4xOFoiIGZpbGw9IiNkMGQ1ZjIiIGNsYXNzPSJmaWxsLTMzMzMzMyI+PC9wYXRoPjxwYXRoIGQ9Im00NjYuODgzIDMwMC40MTctLjAwNy4yMjdjLS4wMTkgMS44NDctMi40IDE3Ni43MTctNDYuMTg5IDI1OC4zMzFhNC4yNjQgNC4yNjQgMCAwIDAgNC40NzcgNi4yIDE3LjUyNSAxNy41MjUgMCAwIDAgMTMuMDI2LTkuOTc1YzE1Ljc0NS0zNC4wNjIgMjcuNTEyLTgyLjk2IDM1LjA3LTE0NS45MTggNi44NDctNTcuMDMyIDcuNTc4LTEwNS42MjMgNy42MTQtMTA4LjM3NSAyLjY2Ny02MS42NDYgMTQuNjg1LTExMy45NTEgMzUuNzIxLTE1NS40NTYgMTIuODIyLTI1LjMgMjYuNTA3LTQxLjUgMzYuNTIzLTUxLjEyN2E3LjEgNy4xIDAgMCAwIDEuMS04Ljg1MSA2LjkwOCA2LjkwOCAwIDAgMC0xMC42NjQtMS4zNjRjLTEwLjkyNiAxMC40OTItMjUuNzUzIDI4LTM5LjQ0NiA1NS4wMTMtMjEuOTU4IDQzLjMyNy0zNC40ODMgOTcuNTkzLTM3LjIyNSAxNjEuMjk1WiIgZmlsbD0iI2QwZDVmMiIgY2xhc3M9ImZpbGwtMzMzMzMzIj48L3BhdGg+PC9zdmc+"
        alt="Random Facts"
        width={300}
        height={300}
      />
      <AnimatePresence>
        {facts.length > 1 ? (
          <motion.div
            style={{ opacity: 0, y: "100%" }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "-100%",
            }}
          >
            <h1 className={styles.facts__title}>
              Random Fact #{factNumber + 1}
              <div className={styles["facts__title-btns"]}>
                <button
                  className={styles["facts__title-btns-trigger"]}
                  onClick={incrementFactNumber}
                >
                  +
                </button>
                <button
                  className={styles["facts__title-btns-trigger"]}
                  onClick={decrementFactNumber}
                >
                  -
                </button>
              </div>
              /{facts.length}
            </h1>
            {/* Error message if user tries to go below 1 or above 30 */}
            <p
              className={
                factNumberValidate
                  ? styles.facts__validate +
                    " " +
                    styles["facts__validate--active"]
                  : styles.facts__validate
              }
            >
              Random Fact # cannot go{" "}
              <strong>{factNumber === 0 ? "below 0" : "above 30"}</strong>!
            </p>

            {/* Display random fact */}
            <div className={styles.facts__fact}>
              <p className={styles["facts__fact-text"]}>{facts[factNumber].fact}</p>
            </div>
          </motion.div>
        ) : (
          <>
            <h1 className={styles.facts__title}>Did you know...</h1>
            <p className={styles["facts__fact-text"]}>{facts[factNumber].fact}</p>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBtns ? (
          <motion.div
            style={{ opacity: 0, y: "100%" }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className={styles.facts__row}>
              <button
                className={styles["facts__row-btn"]}
                onClick={() => setIsSiteReady(true)}
              >
                Show Me The Site! :D
              </button>
              {facts.length > 1 ? (
                <button
                  className={
                    styles["facts__row-btn"] +
                    " " +
                    styles["facts__row-btn--hollow"]
                  }
                  onClick={randomFact}
                >
                  Another Random, Random Fact{" "}
                  <span className={styles["facts__row-btn-icon"]}>&#8693;</span>
                </button>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
