--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.department (
    name character varying(50),
    id integer NOT NULL
);


ALTER TABLE public.department OWNER TO postgres;

--
-- Name: department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.department_id_seq OWNER TO postgres;

--
-- Name: department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.department_id_seq OWNED BY public.department.id;


--
-- Name: emp_dept; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.emp_dept (
    emp_id integer NOT NULL,
    dept_id integer NOT NULL
);


ALTER TABLE public.emp_dept OWNER TO postgres;

--
-- Name: emp_dept_emp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.emp_dept_emp_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emp_dept_emp_id_seq OWNER TO postgres;

--
-- Name: emp_dept_emp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.emp_dept_emp_id_seq OWNED BY public.emp_dept.emp_id;


--
-- Name: emp_job; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.emp_job (
    emp_id integer NOT NULL,
    job_id integer NOT NULL
);


ALTER TABLE public.emp_job OWNER TO postgres;

--
-- Name: emp_job_emp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.emp_job_emp_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emp_job_emp_id_seq OWNER TO postgres;

--
-- Name: emp_job_emp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.emp_job_emp_id_seq OWNED BY public.emp_job.emp_id;


--
-- Name: emp_job_job_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.emp_job_job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emp_job_job_id_seq OWNER TO postgres;

--
-- Name: emp_job_job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.emp_job_job_id_seq OWNED BY public.emp_job.job_id;


--
-- Name: emp_location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.emp_location (
    emp_id integer NOT NULL,
    location_id integer NOT NULL
);


ALTER TABLE public.emp_location OWNER TO postgres;

--
-- Name: emp_location_emp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.emp_location_emp_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emp_location_emp_id_seq OWNER TO postgres;

--
-- Name: emp_location_emp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.emp_location_emp_id_seq OWNED BY public.emp_location.emp_id;


--
-- Name: emp_location_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.emp_location_location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emp_location_location_id_seq OWNER TO postgres;

--
-- Name: emp_location_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.emp_location_location_id_seq OWNED BY public.emp_location.location_id;


--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    first_name character varying(50),
    last_name character varying(50),
    id integer NOT NULL
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_id_seq OWNER TO postgres;

--
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- Name: job; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.job (
    title character varying(50),
    id integer NOT NULL
);


ALTER TABLE public.job OWNER TO postgres;

--
-- Name: job_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.job_id_seq OWNER TO postgres;

--
-- Name: job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.job_id_seq OWNED BY public.job.id;


--
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    city character varying,
    id integer NOT NULL
);


ALTER TABLE public.location OWNER TO postgres;

--
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_id_seq OWNER TO postgres;

--
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.location_id_seq OWNED BY public.location.id;


--
-- Name: department id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department ALTER COLUMN id SET DEFAULT nextval('public.department_id_seq'::regclass);


--
-- Name: emp_job emp_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_job ALTER COLUMN emp_id SET DEFAULT nextval('public.emp_job_emp_id_seq'::regclass);


--
-- Name: emp_job job_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_job ALTER COLUMN job_id SET DEFAULT nextval('public.emp_job_job_id_seq'::regclass);


--
-- Name: emp_location emp_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_location ALTER COLUMN emp_id SET DEFAULT nextval('public.emp_location_emp_id_seq'::regclass);


--
-- Name: emp_location location_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_location ALTER COLUMN location_id SET DEFAULT nextval('public.emp_location_location_id_seq'::regclass);


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- Name: job id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job ALTER COLUMN id SET DEFAULT nextval('public.job_id_seq'::regclass);


--
-- Name: location id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location ALTER COLUMN id SET DEFAULT nextval('public.location_id_seq'::regclass);


--
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.department (name, id) FROM stdin;
Marketing	8
Sales	9
Operations	10
Human Resource	11
IT	12
\.


--
-- Data for Name: emp_dept; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.emp_dept (emp_id, dept_id) FROM stdin;
180	8
181	9
182	10
183	12
184	9
185	10
186	10
187	11
188	8
189	10
190	8
191	8
192	8
193	8
194	11
\.


--
-- Data for Name: emp_job; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.emp_job (emp_id, job_id) FROM stdin;
180	1
181	1
182	1
183	1
184	4
185	4
186	1
187	1
188	4
189	1
191	1
192	1
193	3
194	2
190	4
\.


--
-- Data for Name: emp_location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.emp_location (emp_id, location_id) FROM stdin;
180	1
181	2
182	3
183	4
184	1
185	2
186	2
187	1
188	6
189	6
190	3
191	4
192	4
193	3
194	5
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (first_name, last_name, id) FROM stdin;
Dietmar	Jansen	181
Özsu	Özkara	182
Marius	Andre	183
Evelyn	Smith	184
Jonathan	Herrera	185
Onildo	Gonçalves	186
Joel	Østlie	187
Bionda	Kluitenberg	188
Tracy	Sanchez	189
Gabrielle	Brown	191
Sofia	Elo	192
Carter	Hawkins	193
Mijs	Van Buiten	194
Rosa	Ramirez	180
EllinorX	Heise	190
\.


--
-- Data for Name: job; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job (title, id) FROM stdin;
Manager	1
Accountant	2
Administrative assistant	3
President	4
\.


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.location (city, id) FROM stdin;
New York	1
San Francisco	2
Boston	3
Seattle	4
Los Angeles	5
Houston	6
\.


--
-- Name: department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.department_id_seq', 12, true);


--
-- Name: emp_dept_emp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emp_dept_emp_id_seq', 1, false);


--
-- Name: emp_job_emp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emp_job_emp_id_seq', 1, false);


--
-- Name: emp_job_job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emp_job_job_id_seq', 1, false);


--
-- Name: emp_location_emp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emp_location_emp_id_seq', 1, false);


--
-- Name: emp_location_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emp_location_location_id_seq', 1, false);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 194, true);


--
-- Name: job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.job_id_seq', 4, true);


--
-- Name: location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.location_id_seq', 6, true);


--
-- Name: department department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);


--
-- Name: emp_job emp_job_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_job
    ADD CONSTRAINT emp_job_pkey PRIMARY KEY (emp_id, job_id);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: job job_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job
    ADD CONSTRAINT job_pkey PRIMARY KEY (id);


--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);


--
-- Name: emp_dept dept_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_dept
    ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES public.department(id) NOT VALID;


--
-- Name: emp_dept emp_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_dept
    ADD CONSTRAINT emp_id FOREIGN KEY (emp_id) REFERENCES public.employee(id) NOT VALID;


--
-- Name: emp_location emp_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_location
    ADD CONSTRAINT emp_id FOREIGN KEY (emp_id) REFERENCES public.employee(id) NOT VALID;


--
-- Name: emp_job emp_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_job
    ADD CONSTRAINT emp_id FOREIGN KEY (emp_id) REFERENCES public.employee(id) NOT VALID;


--
-- Name: emp_job job_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_job
    ADD CONSTRAINT job_id FOREIGN KEY (job_id) REFERENCES public.job(id) NOT VALID;


--
-- Name: emp_location location_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.emp_location
    ADD CONSTRAINT location_id FOREIGN KEY (location_id) REFERENCES public.location(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

