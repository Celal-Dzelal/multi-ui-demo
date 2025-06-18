import { Container, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button as BootstrapButton } from "react-bootstrap";
import { Button as MUIButton } from "@mui/material";
import { Button as ChakraButton } from "@chakra-ui/react";
const MainPage = () => {
  const navigate = useNavigate();
  const handleNavigation = (ui) => {
    navigate(`/demo/${ui}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Choose UI Library
      </Typography>
      <Stack spacing={4} mt={4}>
        {/*Bootstrap*/}
        <div>
          <BootstrapButton
            variant="primary"
            onClick={() => handleNavigation("bootstrap")}
          >
            Bootstrap UI
          </BootstrapButton>
        </div>
        {/*Material UI*/}
        <div>
          <MUIButton
            variant="contained"
            color="secondary"
            onClick={() => handleNavigation("mui")}
          >
            Material UI
          </MUIButton>
        </div>
        {/*Chakra UI*/}
        {/* <div>
          <ChakraButton
            colorPalette="blue"
            rounded="xl"
            size="lg"
            variant="surface"
            onClick={() => handleNavigation("chakra")}
          >
            Chakra
          </ChakraButton>
        </div> */}
      </Stack>
    </Container>
  );
};

export default MainPage;
