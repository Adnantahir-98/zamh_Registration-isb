import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Upload Your Documents', 'Answer the Questions', 'Create Your Account'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <form method="POST" >
                  <div class="col-auto text-left mb-4">
                    <label for="validationTooltipUsername" className="text-left"><h6 className="text-left">Upload Your Photo</h6></label>
                    <div class="input-group input_group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text border-success border-right-0"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                      </div>
                      <input type="file" class="form-control border-success border-left-0" required="required" />
                    </div>
                  </div>

                  <div class="col-auto text-left mb-4">
                    <label for="validationTooltipUsername" className="text-left"><h6 className="text-left">CNIC Front</h6></label>
                    <div class="input-group input_group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text border-success border-right-0"><i class="fa fa-id-card-o" aria-hidden="true"></i></div>
                      </div>
                      <input type="file" class="form-control border-success border-left-0" required="required" />
                    </div>
                  </div>

                  <div class="col-auto text-left mb-4">
                    <label for="validationTooltipUsername" className="text-left"><h6 className="text-left">CNIC Back</h6></label>
                    <div class="input-group input_group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text border-success border-right-0"><i class="fa fa-id-card" aria-hidden="true"></i></div>
                      </div>
                      <input type="file" class="form-control border-success border-left-0" required />
                    </div>
                  </div>

                  <div class="col-auto text-left mb-4">
                    <label for="validationTooltipUsername" className="text-left"><h6 className="text-left">Driver's License Front</h6></label>
                    <div class="input-group input_group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text border-success border-right-0"><i class="fa fa-address-card-o" aria-hidden="true"></i></div>
                      </div>
                      <input type="file" class="form-control border-success border-left-0" required />
                    </div>
                  </div>

                  <div class="col-auto text-left mb-5">
                    <label for="validationTooltipUsername" className="text-left"><h6 className="text-left">Driver's License Back</h6></label>
                    <div class="input-group input_group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text border-success border-right-0"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                      </div>
                      <input type="file" class="form-control border-success border-left-0" required />
                    </div>
                  </div>

                </form>
              </div>
            </div>
        </div>
      );
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

function Documents() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (

    <section className="bg-light">
      <div className="bg-light">
        {/* Header Section */}
        <div className="container">
            <div className="row">
                <Link to="/" name="top"><img src="imgs/logo.png" alt="" className="text-left float-left" style={{height:"86px", width:"200px"}} /></Link>
            </div>
        </div>
        <div className="mt-5 pb-5">
          <div className={classes.root}>
            <div className="container mb-5">
              <Stepper nonLinear activeStep={activeStep} className="bg-light">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepButton onClick={handleStep(index)} completed={completed[index]}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </div>
            
            <div>
              {allStepsCompleted() ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography variant="caption" className={classes.completed}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button variant="contained" color="pimary" onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        </Button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}



export default Documents

