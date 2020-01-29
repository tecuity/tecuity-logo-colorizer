import React from 'react';
import styled from '@emotion/styled'
import Logo from './Logo'
import ColorToolbar from './components/ColorToolbar'
import CustomColorBar from './components/CustomColorBar'
import saveSvgAsPng from 'save-svg-as-png'
import SvgSaver from 'svgsaver'
import 'normalize.css'
import './App.css';

const RATIO = 1000/283
var svgsaver = new SvgSaver();   

function App() {
  const [selectedColor, setSelectedColor] = React.useState("#93D500")
  const [customColor, setCustomColor] = React.useState(selectedColor)
  const [width, setWidth] = React.useState("1000")
  const [height, setHeight] = React.useState("283")
  const svgRef = React.useRef()

  const isCustom = selectedColor === "custom"

  const downloadPNG = () => {
    saveSvgAsPng.saveSvgAsPng(svgRef.current, `tecuity_logo_${isCustom ? customColor : selectedColor}.png`, {scale: width / 800, encoderOptions: 1})
  }

  const downloadSVG = () => {
    svgsaver.asSvg(svgRef.current);    
  }
  
  return (
    <PageWrapper>
      <InnerWrapper>
        <Logo color={isCustom ? customColor : selectedColor} innerRef={svgRef} />
        <ColorToolbar selectedColor={selectedColor} onSelected={color => {
          setSelectedColor(color)
          setCustomColor(color)
        }} />
        <CustomColorBar
          customColor={customColor}
          isSelected={isCustom}
          width={width}
          height={height}
          setWidth={newWidth => {
            setWidth(newWidth)
            setHeight(Math.round(newWidth / RATIO))
          }}
          setHeight={newHeight => {
            setHeight(newHeight)
            setWidth(Math.round(newHeight * RATIO))
          }}
          onPicked={color => {
            setSelectedColor("custom")
            setCustomColor(color)
          }}
          onDownloadRequested={downloadPNG}
          onSVGDownloadRequested={downloadSVG}
        />
      </InnerWrapper>
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`

const InnerWrapper = styled('div')`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`