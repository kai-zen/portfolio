import { ChevronLeft } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { pages } from "../../assets/constants";

const NextPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nextTitle, setNextTitle] = useState(pages[1].title);
  const [nextPath, setNextPath] = useState(pages[1].path);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setNextTitle(pages[1].title);
        setNextPath(pages[1].path);
        break;
      case "/projects":
        setNextTitle(pages[2].title);
        setNextPath(pages[2].path);
        break;
      case "/skills":
        setNextTitle(pages[0].title);
        setNextPath(pages[0].path);
        break;
      default:
        setNextTitle(pages[0].title);
        setNextPath(pages[0].path);
    }
  }, [location]);

  return (
    <Button
      variant="outlined"
      size="large"
      sx={{
        position: "fixed",
        left: "10%",
        bottom: "5%",
        zIndex: "3",
      }}
      startIcon={<ChevronLeft />}
      onClick={() => {
        navigate(nextPath);
      }}
    >
      {nextTitle}
    </Button>
  );
};

export default NextPage;
