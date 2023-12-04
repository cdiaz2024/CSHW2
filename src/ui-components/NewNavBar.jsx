/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, View } from "@aws-amplify/ui-react";
export default function NewNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="718px"
      height="109px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NewNavBar")}
      {...rest}
    >
      <View
        width="127.88px"
        height="18.91px"
        {...getOverrideProps(overrides, "LogoWithText")}
      ></View>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32141157342")}
      ></Flex>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "MyIcon")}
      ></View>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32141157344")}
      >
        <Flex
          width="29px"
          height="29px"
          {...getOverrideProps(overrides, "Button")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
