import { useEffect } from "react";
import { api } from "../service/api";

export default function Home() {
  useEffect(() => {
    api.get("/packages", {
      data: {
        id: `teste`,
      },
    });
  }, []);

  return <h1>teste</h1>;
}
