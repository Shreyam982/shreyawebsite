import * as ort from "onnxruntime-web";
import {
  NN_CANVAS_LENGTH,
  NN_INPUT_LENGTH,
  NN_PIXEL_LENGTH,
} from "../constants";

export const runMnistModel = async (input: number[]) => {
  const session = await ort.InferenceSession.create("/models/mnist-12.onnx", {
    executionProviders: ["webgl"],
    graphOptimizationLevel: "all",
  });

  const feeds: Record<string, ort.Tensor> = {};
  feeds[session.inputNames[0]] = new ort.Tensor("float32", input, [
    1,
    1,
    NN_INPUT_LENGTH,
    NN_INPUT_LENGTH,
  ]);

  const outputData = await session.run(feeds);
  const output = outputData[session.outputNames[0]];
  const outputSoftmax = softmax(Array.prototype.slice.call(output.data));
  return outputSoftmax;
};

//The softmax transforms values to be between 0 and 1
const softmax = (resultArray: number[]) => {
  const largestNumber = Math.max(...resultArray);
  const sumOfExp = resultArray
    .map((resultItem) => Math.exp(resultItem - largestNumber))
    .reduce((prevNumber, currentNumber) => prevNumber + currentNumber);
  return resultArray.map((resultValue) => {
    return Math.exp(resultValue - largestNumber) / sumOfExp;
  });
};

const rgbToGrey = (r: number, g: number, b: number) =>
  0.299 * r + 0.587 * g + 0.114 * b;

export const imageToNNInput = (image: ImageData): number[] => {
  const nnInput: number[] = new Array(NN_INPUT_LENGTH * NN_INPUT_LENGTH).fill(
    0
  );
  image.data.forEach((_, i) => {
    if (i % 4 !== 0) return;

    const r = image.data[i];
    const g = image.data[i + 1];
    const b = image.data[i + 2];
    const grey = rgbToGrey(r, g, b);

    const col = Math.floor(((i / 4) % NN_CANVAS_LENGTH) / NN_PIXEL_LENGTH);
    const row = Math.floor(i / 4 / NN_CANVAS_LENGTH / NN_PIXEL_LENGTH);
    nnInput[row * NN_INPUT_LENGTH + col] += grey / 255;
  });
  nnInput.forEach((_, i) => {
    nnInput[i] = 1 - nnInput[i] / (NN_PIXEL_LENGTH * NN_PIXEL_LENGTH);
  });
  return nnInput;
};
