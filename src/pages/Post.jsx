import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  return <></>;
}
