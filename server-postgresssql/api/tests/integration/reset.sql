    
TRUNCATE plants RESTART IDENTITY;

INSERT INTO plants (name, light, weeks_kept_alive) 
VALUES
    ('Plant1', 'Not fussy', 0),
    ('Plant2','Lower light', 0),
    ('Plant3','Bright light', 0);