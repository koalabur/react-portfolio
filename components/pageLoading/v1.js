// React
import { useState, useEffect, useContext } from "react";

// Next
import Image from "next/image";

// Framer motion
import { AnimatePresence, motion } from "framer-motion";

// Styles
import styles from "/styles/pageLoading/v1.module.scss";

// Context
import { AppContext } from "../../context/GlobalState";

// Loops through about items from parent
export default function PageLoading() {
  const [facts, setFacts] = useState([
    {
      fact: "Business.com is currently the most expensive domain name sold for $7.5 million",
    },
  ]);
  const [rng, setRng] = useState(0);
  const [showBtns, setShowBtns] = useState(false);
  const { isSiteReady, setIsSiteReady } = useContext(AppContext);

  const randomFact = (e) => {
    const len = facts.length;
    setRng(Math.floor(Math.random() * len));
  };

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
        alt="Did you know..."
        width={300}
        height={300}
      />
      <h1 className={styles.facts__title}>
        {facts.length > 1
          ? `Random Fact #${rng + 1}/${facts.length}`
          : "Did you know..."}
      </h1>
      <p className={styles.facts__fact}>{facts[rng].fact}</p>

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
                  Another Random Fact &#8693;
                </button>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
