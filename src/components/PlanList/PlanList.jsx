import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import PlanItem from './PlanItem/PlanItem';
import { planList } from './PlanList.const';
import { PlanItems, StyledPlanListContainer, StyledPlanListWrapper, StyledPLContent } from './PlanList.styled';

const PlanList = () => {
  return (
    <StyledPlanListContainer>
      <StyledPlanListWrapper>
        <StyledPLContent>
          <Heading tag="h1" text="VRSTE" coloredText="ČLANARINA" margins={{ mb: '40px' }} />
        </StyledPLContent>
        <PlanItems>
          {planList.map((plan) => (
            <PlanItem key={plan.heading} plan={plan} />
          ))}
        </PlanItems>
      </StyledPlanListWrapper>
    </StyledPlanListContainer>
  );
};

PlanList.propTypes = {
  plan: PropTypes.arrayOf({}),
};

export default PlanList;
