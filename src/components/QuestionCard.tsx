import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import AppButton from "../common/components/AppButton";

interface IQuestionCardProps {
  question: string;
  category: string;
  totalQuestions?: number;
  questionNumber?: number;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard = (props: IQuestionCardProps) => {
  const { question, category, totalQuestions, questionNumber, checkAnswer } =
    props;
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box fontSize="sm" mb={1}>
          {category}
        </Box>
        <Heading as="h1" size="lg">
          <p dangerouslySetInnerHTML={{ __html: question }} />
        </Heading>
        <Flex direction="column">
          <Box w="100%" mt={4}>
            <AppButton
              colorScheme="purple"
              value="True"
              variant="outline"
              onClick={() => checkAnswer}
              width="full"
            />
          </Box>
          <Spacer />
          <Box w="100%" mt={4}>
            <AppButton
              colorScheme="purple"
              value="True"
              variant="outline"
              onClick={() => checkAnswer}
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default QuestionCard;
