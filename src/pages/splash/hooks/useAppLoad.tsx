import { useState, useEffect } from "react";

type AppLoadProps = {
  incrementProgressValue?: number;
  /**
   * setIntervalue value i.e. to update the progress value after each interval
   */
  progressInterval?: number;
  /**
   * after progressInterval stopped, how many seconds we should wait to complete the progress
   */
  successLoadedTimeout?: number;
  /**
   * At which progress value we want to stop the progress
   */
  stoppedProgressValue?: number;
  /**
   * if true then it will automatically complete the progress after 'successLoadedTimeout'
   * otherwise we have to manually call done()
   */
  isManualProgressCompleted?: boolean;
};

export default function useAppLoad(props?: AppLoadProps) {
  const {
    progressInterval = 500,
    incrementProgressValue = 10,
    successLoadedTimeout = 3000,
    stoppedProgressValue = 70,
    isManualProgressCompleted = true,
  } = props ?? {};

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= stoppedProgressValue) {
          clearInterval(interval);
        }

        return prev + incrementProgressValue;
      });
    }, progressInterval);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [incrementProgressValue, progressInterval, stoppedProgressValue]);

  useEffect(() => {
    let timeout: any;
    if (progress >= stoppedProgressValue && isManualProgressCompleted) {
      timeout = setTimeout(() => {
        setIsLoaded(true);
      }, successLoadedTimeout);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [progress, stoppedProgressValue, isManualProgressCompleted, successLoadedTimeout]);

  const done = () => {
    if (!isManualProgressCompleted) {
      setIsLoaded(true);
    }
  };

  return { progress, isLoaded, done };
}
