import React from "react";
import { SketchPicker } from "react-color";
import styled from "@emotion/styled";

const CustomColorBar = ({
  customColor,
  isSelected,
  width,
  setWidth,
  height,
  setHeight,
  onPicked,
  onDownloadRequested,
  onSVGDownloadRequested
}) => {
  return (
    <Wrapper>
      <Column>
        <SketchPicker
          color={customColor}
          onChange={color => onPicked(color.hex)}
        />
      </Column>
      <Column style={{marginLeft: 60}}>
        <Row>
          <Column>
            <Label>Width</Label>
            <HexInput type="number" value={width} onChange={e => setWidth(e.target.value)} />
          </Column>
        </Row>
        <Row style={{marginTop: 15}}>
          <Column>
            <Label>Height</Label>
            <HexInput type="number" value={height} onChange={e => setHeight(e.target.value)} />
          </Column>
        </Row>
        <SubmitButton style={{marginTop: 20}} onClick={onDownloadRequested}>
          Download PNG
        </SubmitButton>
        <SubmitButton style={{marginTop: 10}} onClick={onSVGDownloadRequested}>
          Download SVG
        </SubmitButton>
      </Column>
    </Wrapper>
  );
};

export default CustomColorBar;

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Column = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Row = styled("div")`
  width: 100%;
`;

const Label = styled("label")`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
`;

const HexInput = styled("input")`
  border: 3px solid #ddd;
  border-radius: 8px;
  font-size: 25px;
  width: 250px;
  height: 50px;
  padding-left: 10px;
  font-weight: 600;
`;

const SubmitButton = styled('button')`
  width: 100%;
  padding: 13px 13px;
  background: #000;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  &:hover{
    background: #444444;
  }
`