import React from "react";
import "./Skills.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Skills() {
  var val = () => {
    // Original string
    var arr = [0, 9, 4, 1, 5, 8, 7, 3];

    // document.write(arr);
    // document.write("<br>");
    // Sorting the array
    alert(arr.sort());
  };

  return (
    <div className=" skills">
      <Container fluid className="">
        <Row>
          <Col className="skills_left" lg={3} sm={12}>
            <div className="skills_left_sidenav">
              <h1>Harsh Kumar</h1>
              <ul>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <Button onClick={val}>Click</Button>
            </div>
          </Col>
          <Col className="skills_right" lg={9} sm={12}>
            <div className="skills_right_sidenav"></div>
            <h1>HTML</h1>
            <p>
              Okay, so this is the only bit of mandatory theory. In order to
              begin to write HTML, it helps if you know what you are writing.
              HTML is the language in which most websites are written. HTML is
              used to create pages and make them functional. The code used to
              make them visually appealing is known as CSS and we shall focus on
              this in a later tutorial. For now, we will focus on teaching you
              how to build rather than design.
            </p>
            <p>
              HTML was first created by Tim Berners-Lee, Robert Cailliau, and
              others starting in 1989. It stands for Hyper Text Markup Language.
              Hypertext means that the document contains links that allow the
              reader to jump to other places in the document or to another
              document altogether. The latest version is known as HTML5. A
              Markup Language is a way that computers speak to each other to
              control how text is processed and presented. To do this HTML uses
              two things: tags and attributes.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <p>
              HTML was first created by Tim Berners-Lee, Robert Cailliau, and
              others starting in 1989. It stands for Hyper Text Markup Language.
              Hypertext means that the document contains links that allow the
              reader to jump to other places in the document or to another
              document altogether. The latest version is known as HTML5. A
              Markup Language is a way that computers speak to each other to
              control how text is processed and presented. To do this HTML uses
              two things: tags and attributes.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <p>
              HTML was first created by Tim Berners-Lee, Robert Cailliau, and
              others starting in 1989. It stands for Hyper Text Markup Language.
              Hypertext means that the document contains links that allow the
              reader to jump to other places in the document or to another
              document altogether. The latest version is known as HTML5. A
              Markup Language is a way that computers speak to each other to
              control how text is processed and presented. To do this HTML uses
              two things: tags and attributes.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
