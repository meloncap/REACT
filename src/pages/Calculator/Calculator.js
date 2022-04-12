import { Title, Text, Image, SimpleGrid, NumberInput } from '@mantine/core';
import Card from '../../components/Card/Card';
import { ReactComponent as Balance } from '../../assets/calculator-balance.svg';
import { ReactComponent as Token } from '../../assets/calculator-token.svg';
import { ReactComponent as Boost } from '../../assets/calculator-boost.svg';
import { ReactComponent as Time } from '../../assets/calculator-time.svg';
import gradient6 from '../../assets/gradient-6.png';
import gradient7 from '../../assets/gradient-7.png';
import useStyles from './Calculator.styles';

const row1 = [
  { icon: Balance, title: 'Balance', value: 0.0 },
  { icon: Token, title: 'Locked Tokens', value: 0.0 },
  { icon: Boost, title: 'Boost', value: 0.0 },
  { icon: Time, title: 'Time Remaining Before Unlock', value: 0.0 },
];

const Calculator = () => {
  const { classes } = useStyles();

  const row1List = row1.map((item) => (
    <Card className={classes.cardStat}>
      <item.icon className={classes.cardStatIcon} />
      <div>
        <Title className={classes.cardStatTitle} order={5}>
          {item.title}
        </Title>
        <Text size="md">{item.value}</Text>
      </div>
    </Card>
  ));

  return (
    <div>
      <div className={classes.row}>
        <SimpleGrid
          className={classes.row}
          cols={4}
          spacing={40}
          breakpoints={[
            { maxWidth: 1366, cols: 2 },
            { maxWidth: 768, cols: 1 },
          ]}>
          {row1List}
        </SimpleGrid>
      </div>

      <div className={classes.row}>
        <Card>
          <SimpleGrid className={classes.row} cols={2} spacing={40} breakpoints={[{ maxWidth: 768, cols: 1 }]}>
            <div>
              <NumberInput className={classes.inputAmount} classNames={{ input: classes.input }} placeholder="Amount" decimalSeparator="." precision={2} noClampOnBlur hideControls />
              <SimpleGrid cols={2} spacing={40} breakpoints={[{ maxWidth: 768, cols: 1 }]}>
                <NumberInput classNames={{ input: classes.input }} placeholder="15 D" decimalSeparator="." precision={2} noClampOnBlur hideControls />
                <NumberInput classNames={{ input: classes.input }} placeholder="60 D" decimalSeparator="." precision={2} noClampOnBlur hideControls />
                <NumberInput classNames={{ input: classes.input }} placeholder="30 D" decimalSeparator="." precision={2} noClampOnBlur hideControls />
                <NumberInput classNames={{ input: classes.input }} placeholder="180 D" decimalSeparator="." precision={2} noClampOnBlur hideControls />
              </SimpleGrid>
            </div>
            <div>Result</div>
          </SimpleGrid>
        </Card>
      </div>

      <Image className={classes.gradient6} src={gradient6} />
      <Image className={classes.gradient7} src={gradient7} />
    </div>
  );
};

export default Calculator;
