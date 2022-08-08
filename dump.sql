--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

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
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortUrls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."shortUrls" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" bigint DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public."shortUrls" OWNER TO postgres;

--
-- Name: shortUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."shortUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."shortUrls_id_seq" OWNER TO postgres;

--
-- Name: shortUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."shortUrls_id_seq" OWNED BY public."shortUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortUrls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", "createdAt") FROM stdin;
1	10	2022-08-08
2	8	2022-08-08
3	7	2022-08-08
4	1	2022-08-08
\.


--
-- Data for Name: shortUrls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."shortUrls" (id, "userId", "shortUrl", url, "visitCount", "createdAt") FROM stdin;
2	7	vKwjcEl52h	https://www.google.com	2	2022-08-08
3	8	OsFOTZxBR5	https://www.google.com	1	2022-08-08
4	8	6FQtVl8QX6	https://www.apple.com	1	2022-08-08
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Luan	luan@driven.com.br	$2a$10$IT9I8/U2uApgvNviVCoaJ.lrbBVxJ/Pkv9uaGuN6MAJPkr8FfhE4e	2022-08-08
2	Maria	maria@driven.com.br	$2a$10$UCVCIfDFKg17YlL5NUcR1OjLSKuD9nYsjLvcUAnNDCkFC7Mu0WWCi	2022-08-08
3	João Luiz	joão@driven.com.br	$2a$10$Wtt6MfCUTczJY.aQXebgiu2DoZjNaD0SWMQK3tcheQP90vqjtI7J2	2022-08-08
4	Luiz	luiz@driven.com.br	$2a$10$DPUSV321ROqjxtKjWgL/oevNl/XY68.pNPuhSGv7N1pE48.ucQCeW	2022-08-08
5	Carlos Almeida	carlos@driven.com.br	$2a$10$CfIEU5jo3QvYPXDZpN24JOmJmYGyZ/ORyH.qPNukdMBC2c2Fx2fEW	2022-08-08
6	Ana Carolina	ana@driven.com.br	$2a$10$BZGD72MAKVUMD15Z6Nt3yer4LS/xPnoTB4e5.SFX.nQWyzNQUAeV2	2022-08-08
7	Júlia	julia@driven.com.br	$2a$10$6nnoat68ZDMFMQcqw23RbOyTPnn8oG8G38i27ShLL8RBXzGEPSGdi	2022-08-08
8	Letícia Souza	leticia@driven.com.br	$2a$10$ZTAV.Wl2mCfHPnPXMdUUROpQyizEYpjw7MQ4N/ProIvz3JjCjtE4W	2022-08-08
9	Jonas Silva	jonas@driven.com.br	$2a$10$0HExUr7S5.Gc5E880xQb7uoFvIBX.TtIl2kIegbo1suqNAG37r1qW	2022-08-08
10	Fábio	fabio@driven.com.br	$2a$10$MT151Cxn7yGF233eg1iRgOI1dlcvfv/UiN78BpU2cv6gDqA2qUBq6	2022-08-08
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 4, true);


--
-- Name: shortUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."shortUrls_id_seq"', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shortUrls shortUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_pkey" PRIMARY KEY (id);


--
-- Name: shortUrls shortUrls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shortUrls shortUrls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

