import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  Link
} from "@mui/material";
import React from "react";
import Table from "./Table";
import { Star } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Acc from "./Acc";

export const Main = () => {
  return (
    <div>
      <Container maxWidth="4px">
        <Stack direction={"row"} gap={"10px"} mt={3}>
          <Box
            classname="indexpage"
            sx={{
              height: "590px",
              width: "50%",
              display: "flex",
              border: "0.5px solid black",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "100%",
                textAlign: "left",
                mt: "20px",
              }}
            >
              <Typography
                sx={{
                  //backgroundColor: "#ccc6ed",
                  width: "100%",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
                noWrap
              >
                Index Search
              </Typography>
            </Box>
          </Box>

          <Box
            classname="Tabularsearch"
            sx={{
              height: "590px",
              width: "50%",
              display: "flex",
              backgroundColor: "white",
              border: "0.5px solid black",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "50%",
                mt: "20px",
                ml: "15px",
              }}
            >
              <Typography
                sx={{
                  //backgroundColor: "#ccc6ed",
                  width: "100%",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
                noWrap
              >
                Tabular Search
              </Typography>
            </Box>
            <Stack direction={"column"} ml={10} 
            mt={10}>
              <Typography
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"blueviolet"}
                fontWeight={600}
                ml={-25}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "100%",
                }}
              >
                Code details
              </Typography>

              <Typography variant="subtitle2" color={""} ml={-25}>
                A00.0 cholera due to vibreo Cholrate
                <Button
                  disableElevation
                  disableFocusRipple
                  sx={{
                    width: "25%",
                    height: "15px",
                    color: "white",
                    fontFamily: "sans-serif",
                    ml: "5%",
                    backgroundColor: "green",
                    textTransform: "lowercase",
                    fontWeight: "700px",
                    textAlign: "center",
                  }}
                >
                  Billable Codes{" "}
                  <IconButton disableFocusRipple disableTouchRipple>
                    <Star
                      sx={{
                        color: "white",
                        fontSize: "15px",
                      }}
                    />
                  </IconButton>
                </Button>
              </Typography>

              <Box
                sx={{
                  height: "300px",

                  width: "100%",
                 /// backgroundColor: "white",
                }}
              >
                <Box
                  sx={{
                    height: "25px",
                    width: "750px",
                    backgroundColor: "#c8e2dd",
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    marginLeft: "-200px",
                    mt: "20px",
                    mr: "20px",
                  }}
                >
                  <Stack direction={"row"} gap={"15%"}>
                    <Link
                      variant="subtitle2"
                      //color="black"
                      fontWeight={"500"}
                    >
                      Code notes
                    </Link>
                    <Link
                      variant="subtitle2"
                     // color={"black"}
                      fontWeight={"500"}
                    >
                      Section notes
                    </Link>
                    <Link
                      variant="subtitle2"
                      //color={"black"}
                      fontWeight={"500"}
                    >
                      Chapter Notes
                    </Link>
                    <Link
                      variant="subtitle2"
                      //color={"black"}
                      fontWeight={"500"}
                    >
                      Chapter guidlines
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </Stack>
            
          </Box>
        </Stack>
        
      </Container>
    </div>
  );
};
