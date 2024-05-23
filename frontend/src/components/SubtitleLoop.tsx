import React from 'react';
import { Box, Typography } from '@mui/material';

interface SubtitleLoopProps {
    color?: string;
}

type Subtitles = string[];

const SubtitleLoop: React.FC<SubtitleLoopProps> = ({ color = '' }) => {
    const subtitles: Subtitles = [
        'MOVIMENT STRENGTH & CONDITIONING',
        'NUTRITION',
        'CARDIO WORKOUT SESSIONS',
        'FITNESS LIFESTYLE',
        'GROUP TRAINING'
    ];

    return (
        <Box sx={{ backgroundColor: color, display: 'flex', width: { xs: '400%', sm: '200%' }, whiteSpace: 'nowrap', animation: 'scroll 15s linear infinite', color: '#222222', overflowX: 'hidden' }}>
            {[...Array(2)].map((_, index) => (
                <Box key={index} sx={{ width: '50%', display: 'inline-block' }}>
                    <Box>
                        {subtitles.map((subtitle, i) => (
                            <Typography key={i} variant="h6" component="span" sx={{ marginRight: '3px', fontSize: { xs: '3vw', sm: '1.5vw' }, display: 'inline-block', paddingRight: '1vw' }}>
                                {subtitle}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default SubtitleLoop;
