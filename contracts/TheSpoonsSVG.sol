// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma abicoder v2;

contract TheSpoonsSVG {
  function generateSVGImage(uint256 tokenId) external view returns (string memory) {
    return string(
        abi.encodePacked(
          '<svg version="1.1" id="svg3599" width="1489.4545" height="1489.4545" viewBox="0 0 1489.4545 1489.4545" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">',
            '<g id="g3605">',
              '<path style="fill:#000000;stroke-width:0.727273" d="m 735.92713,1293.3506 c -11.34876,-1.0966 -19.77253,-5.7393 -26.39266,-14.5461 -9.28309,-12.3492 -13.46486,-26.185 -15.00392,-49.6419 -1.31392,-20.0257 0.0537,-36.0906 6.23074,-73.1906 5.41606,-32.5295 11.22193,-76.0856 16.67417,-125.0909 4.67392,-42.00983 12.0116,-138.73339 15.83451,-208.72728 1.40204,-25.67076 1.16873,-89.36646 -0.39964,-109.0909 -3.19672,-40.20332 -8.32303,-68.8566 -14.64042,-81.83203 -3.41569,-7.01558 -8.5115,-13.63885 -27.40852,-35.62416 -8.93988,-10.4009 -18.42995,-21.85544 -21.08904,-25.45454 -9.16314,-12.40235 -18.65868,-29.45929 -26.02249,-46.74445 -16.22834,-38.09297 -20.35601,-64.98849 -16.71149,-108.89027 3.80268,-45.80676 18.23656,-85.66453 43.21227,-119.32652 18.66906,-25.16194 34.96462,-38.76448 55.67333,-46.47272 13.54251,-5.0408 24.18731,-5.0408 37.72978,0 20.70873,7.70824 37.00429,21.31078 55.67338,46.47272 17.21273,23.19912 29.82669,50.38937 37.04458,79.85212 7.30778,29.82956 9.49171,71.70546 5.09295,97.65622 -5.63055,33.21792 -24.65935,76.23056 -45.20524,102.18182 -2.3752,2.99999 -10.95331,13.14545 -19.06261,22.54545 -22.74917,26.37006 -26.34073,31.76889 -30.23855,45.45454 -4.03571,14.17002 -7.97127,41.00997 -10.29083,70.18182 -1.56837,19.72444 -1.80168,83.42014 -0.39964,109.0909 3.82291,69.99389 11.16058,166.71745 15.83454,208.72728 5.45222,49.0053 11.25811,92.5614 16.67411,125.0909 4.40473,26.455 5.27949,33.2524 6.20997,48.2541 1.29643,20.9011 -0.68844,42.6656 -5.07637,55.6653 -5.2104,15.4361 -14.93498,27.2076 -25.85062,31.2916 -3.36654,1.2596 -17.24829,3.1832 -20.72509,2.8719 -0.6,-0.054 -3.91527,-0.3707 -7.3672,-0.7043 z m 22.61244,-5.7335 c 13.17462,-4.2088 21.04705,-13.0129 26.67033,-29.827 3.97316,-11.8798 4.98407,-20.38 4.93011,-41.4545 -0.0531,-20.8169 -0.44655,-24.6143 -6.06509,-58.5652 -4.5456,-27.4675 -7.13099,-45.8086 -11.65651,-82.6935 -6.59433,-53.7456 -8.28553,-70.887 -12.72015,-128.92308 -8.5208,-111.51272 -10.80996,-162.3965 -9.21542,-204.84452 2.02837,-53.99975 7.86059,-94.62016 16.01157,-111.51911 3.93767,-8.16372 8.07476,-13.7128 23.78865,-31.90788 26.28269,-30.4327 32.31185,-38.78749 42.65491,-59.10811 12.85251,-25.25082 20.82327,-48.47685 24.29811,-70.80218 1.0096,-6.48642 1.30014,-12.68938 1.29461,-27.63637 -0.0116,-31.6314 -3.21309,-53.97602 -11.32298,-79.03143 -8.81621,-27.23754 -20.56138,-49.32416 -37.44945,-70.42311 -16.43331,-20.53066 -32.71622,-32.94474 -51.58553,-39.32856 -8.27141,-2.79837 -18.57629,-2.79837 -26.8477,0 -18.86928,6.38382 -35.15225,18.7979 -51.58549,39.32856 -16.88811,21.09895 -28.6333,43.18557 -37.4495,70.42311 -8.10988,25.05541 -11.31124,47.40003 -11.32297,79.03143 -0.006,14.94699 0.28504,21.14995 1.29461,27.63637 3.4748,22.32533 11.44558,45.55136 24.2981,70.80218 10.34308,20.32062 16.37225,28.67541 42.65495,59.10811 15.71388,18.19508 19.85094,23.74416 23.78862,31.90788 8.15098,16.89895 13.9832,57.51936 16.01157,111.51911 1.59454,42.44802 -0.69462,93.3318 -9.21542,204.84452 -4.43459,58.03608 -6.12583,75.17748 -12.72012,128.92308 -4.52556,36.8849 -7.11094,55.226 -11.65654,82.6935 -5.61855,33.9509 -6.01182,37.7483 -6.06509,58.5652 -0.0378,14.7606 0.22467,20.1782 1.28597,26.5454 3.23655,19.4179 11.41086,35.0312 21.40755,40.8897 6.85099,4.015 12.01877,5.2276 22.42103,5.2613 7.58218,0.025 10.47098,-0.266 14.06727,-1.4149 z M 656.14649,488.14989 c -2.92624,-1.40773 -7.51736,-12.00652 -10.15817,-23.4506 -2.42664,-10.51588 -3.29955,-20.08592 -3.28371,-36 0.0211,-21.15882 2.11894,-33.19548 8.57705,-49.21131 3.97935,-9.86861 0.97957,-8.97051 29.9623,-8.97051 h 24.99691 l -5.00878,5.88182 c -8.52111,10.00634 -13.61183,19.74759 -16.98783,32.50672 -1.48541,5.61393 -1.67659,8.00195 -1.67194,20.88419 0.004,12.93778 0.19442,15.26352 1.71677,21.04215 3.4343,13.03621 9.7909,24.75966 18.46165,34.04876 l 3.90345,4.18182 -24.4072,-0.0492 c -16.42618,-0.0332 -24.9609,-0.31559 -26.1005,-0.86382 z m 22.18924,-13.35131 c 0.24765,-0.64538 -0.28152,-2.85447 -1.17595,-4.90909 -6.00947,-13.80443 -8.26972,-24.46604 -8.26972,-39.00838 0,-12.97058 1.20617,-19.68106 6.06666,-33.75188 1.98569,-5.74843 3.61034,-11.09725 3.61034,-11.88626 0,-1.27828 -0.68711,-1.49031 -6.30753,-1.94635 -9.64084,-0.78225 -10.33359,0.0391 -13.73097,16.27991 -2.59531,12.40667 -3.56588,27.60162 -2.5803,40.39661 1.28275,16.65283 4.92132,32.89296 7.8618,35.08979 0.75887,0.56695 3.63651,0.90909 7.6461,0.90909 5.24496,0 6.51223,-0.21616 6.87957,-1.17344 z m 38.81555,3.17344 c 5.78436,-17.25171 7.96124,-30.42631 7.96124,-48.18182 0,-17.68755 -2.1566,-30.78489 -7.93357,-48.18182 l -3.44144,-10.36363 h 31.04192 31.04189 l -3.47484,10.36363 c -9.21462,27.48235 -10.56313,55.17639 -4.01076,82.36617 1.48145,6.14753 5.4056,18.5442 7.3085,23.08838 0.50284,1.20064 -1.23694,1.27272 -30.71738,1.27272 h -31.2504 z m 40.34262,-3.27273 c -0.94837,-2.40644 -3.92298,-17.65983 -4.82364,-24.73473 -1.16283,-9.13368 -1.15891,-31.20765 0.007,-40.538 0.49993,-4 1.70066,-11.03636 2.6683,-15.63636 0.9677,-4.6 1.76109,-8.77273 1.7632,-9.27273 0,-0.69243 -2.99942,-0.90909 -12.5976,-0.90909 h -12.60131 l 1.68407,7.45455 c 3.15607,13.97095 4.15244,23.29353 4.13905,38.72727 -0.0131,15.42921 -1.03461,24.98481 -4.13905,38.72727 l -1.68407,7.45455 h 13.04276 c 12.12785,0 13.00756,-0.0893 12.54124,-1.27273 z m 29.89883,9.0767 c 9.04131,-9.66551 14.92335,-21.12232 18.5688,-36.16761 0.65018,-2.6835 0.95629,-8.78728 0.92997,-18.54545 -0.0356,-13.32656 -0.19797,-15.13167 -1.93389,-21.54101 -3.34699,-12.35734 -9.212,-23.13429 -17.66488,-32.45899 l -4.12043,-4.54546 h 25.01294 c 18.88364,0 25.30778,0.22277 26.21629,0.9091 1.64662,1.24396 7.28073,16.18273 9.12007,24.18181 5.6384,24.52129 4.40975,58.05147 -2.88625,78.76348 -2.64167,7.49922 -3.90109,10.12331 -5.91651,12.32743 -1.49622,1.63633 -1.49673,1.63636 -26.54378,1.63636 h -25.04749 z m 38.39637,-9.44034 c 1.34567,-1.19117 2.34516,-3.51607 3.6736,-8.54545 5.4109,-20.48476 5.92603,-44.41308 1.43636,-66.71876 -2.04276,-10.14902 -3.56713,-14.46986 -5.46255,-15.48427 -1.44443,-0.77303 -11.51076,-0.97247 -13.35541,-0.26461 -1.70619,0.6547 -1.44779,2.29683 1.78494,11.34379 4.05738,11.35501 5.58604,17.75419 6.54669,27.40617 1.46422,14.71081 -1.09083,31.14593 -6.97076,44.83851 -1.38116,3.21646 -2.51127,6.3846 -2.51127,7.04033 0,1.41224 1.59374,1.78842 8.14123,1.92162 4.10058,0.0834 5.16015,-0.15909 6.71717,-1.53733 z" id="path3689" />',
            '</g>',
          '</svg>'
        )
    );
  }
}
